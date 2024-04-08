import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { useProcessCwdMock } from './useProcessCwdMock.js';
import { rimrafPromised } from '../../../src/lib/files.js';

export interface UseTempPathOptions {
    /**
     * If true, the temp path will be created if it does not exist.
     * @default true
     */
    create: boolean;

    /**
     * If true, the temp path will be removed after the test.
     * @default true
     */
    remove: boolean;

    /**
     * If true, process.cwd() will be set to the temp path.
     * @default false
     */
    cwd: boolean;

    /**
     * If true, the mocked process.cwd will point to the parent folder of the temp path.
     * This will also change how the temp path is created: it will only create the parent folder, not the nested folder!
     * @default false
     */
    cwdParent: boolean;
}

export function useTempPath(
    path: string,
    { create, remove, cwd, cwdParent }: UseTempPathOptions = { create: true, remove: true, cwd: false, cwdParent: false },
) {
    const tmpPath = join(fileURLToPath(import.meta.url), '..', '..', '..', 'tmp', path);
    const cwdPath = cwdParent ? join(fileURLToPath(import.meta.url), '..', '..', '..', 'tmp') : tmpPath;

    let usedCwd = cwdPath;

    if (cwd) {
        const cwdMock = () => usedCwd;
        useProcessCwdMock(cwdMock);
    }

    return {
        tmpPath,
        joinPath: (...paths: string[]) => join(tmpPath, ...paths),
        joinCwdPath: (...paths: string[]) => join(usedCwd, ...paths),
        beforeAllCalls: async () => {
            if (create) {
                if (cwdParent) {
                    await mkdir(cwdPath, { recursive: true });
                } else {
                    await mkdir(tmpPath, { recursive: true });
                }
            }

            // Always reset the usedCwd to the expected initial state
            usedCwd = cwdPath;
        },
        afterAllCalls: async () => {
            if (remove) {
                await rimrafPromised(tmpPath);
            }
        },

        toggleCwdBetweenFullAndParentPath: () => {
            usedCwd = usedCwd === cwdPath ? tmpPath : cwdPath;
        },

        forceNewCwd: (newCwd: string) => {
            usedCwd = join(cwdPath, newCwd);
        },
    };
}
