import path from "path";
import { readdirSync, statSync } from "fs";

interface Aliases {
    [key: string]: string;
}

interface PrevValue {
    [key: string]: string;
}

const getAliasesForAbsolutePaths = (): Aliases => {
    // the same path must be set in tsconfig.json
    const SRC_DIRECTORY = "src";
    const PATH_PREFIX = "@/";
    const ROOT_PATH = path.dirname(__dirname);

    const directories = readdirSync(SRC_DIRECTORY).filter((folder: string) =>
        statSync(path.join(SRC_DIRECTORY, folder)).isDirectory()
    );

    const aliases = directories.reduce((prevValue: PrevValue, currentValue: string) => {
        const key = `${PATH_PREFIX}${currentValue}`;
        const pathToAlias = path.resolve(ROOT_PATH, `src/${currentValue}/`);

        return {
            ...prevValue,
            [key]: pathToAlias,
        };
    }, {});

    return aliases;
};

export default getAliasesForAbsolutePaths;
