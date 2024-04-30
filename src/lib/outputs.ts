import chalk from 'chalk';

export const error = (message: string) => {
    console.error(`${chalk.red('Error:')} ${message}`);
};

export const warning = (message: string) => {
    console.warn(`${chalk.rgb(254, 90, 29).bold('Warning:')} ${message}`);
};

export const success = (message: string) => {
    console.log(`${chalk.green('Success:')} ${message}`);
};

export const run = (message: string) => {
    console.log(`${chalk.gray('Run:')} ${message}`);
};

export const info = (message: string) => {
    console.log(`${chalk.white('Info:')} ${message}`);
};

export const link = (title: string, url: string) => {
    console.log(`${chalk.blue(title)} -> ${url}`);
};
