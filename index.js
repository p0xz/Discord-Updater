#!/usr/bin/env node

import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { loadingAnimation } from './utils.js';
import fs from 'fs/promises'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function get_version(platform = "linux", format = "deb") {
    const response = await fetch(`https://discord.com/api/download?platform=${platform}&format=${format}`, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9,sk;q=0.8",
            "Referer": "https://discord.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "method": "GET"
    });

    return response.url;
}

(async () => {

    /**
    * @type {Map<string, string>}
    */
    const args = process.argv.slice(2).reduce((acc, arg) => {
        const [key, value] = arg.split("=");

        if (!key || !value) {
            throw new Error("Invalid argument format");
        }

        if (key === "format" && !["deb", "tar.gz"].includes(value)) {
            throw new Error("Invalid file type! Use 'deb' or 'tar.gz'");
        }

        acc.set(key, value);

        return acc;
    }, new Map());

    // TODO: Add support for tar.gz and other formats if needed :D

    const platform = "linux"; // args.get("platform")
    const format = "deb"; // args.get("format")


    const waiting = loadingAnimation("Retrieving discord version");

    const url = await get_version(platform, format);

    const version = url.match(/discord-([\d.]+)(?<!\.)/)[1];

    waiting.pipe(`Downloading discord (${version})`);

    const response = await fetch(url, {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "en-US,en;q=0.9,sk;q=0.8",
            "Referer": "https://discord.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "method": "GET"
    });

    const blob = await response.blob();

    const buffer = Buffer.from(await blob.arrayBuffer());

    const filePath = path.resolve(__dirname, `discord.${format}`);

    await fs.writeFile(filePath, buffer, (err) => {
        if (err) throw err;
    });

    waiting.pipe(`Installing discord (${version})`);

    const installationProcess = exec(`sudo dpkg -i ${filePath}`);

    installationProcess.stderr.on('data', (data) => {
        waiting.stop();
        throw new Error(data);
    });

    installationProcess.stdout.on('close', () => {
        waiting.stop();
        console.log(`Discord ${version} installed successfully!`);

        fs.unlink(filePath, (err) => {
            if (err) throw err;
        });
    });
})();