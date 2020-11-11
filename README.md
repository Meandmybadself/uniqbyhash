# uniqbyhash

## Overview

This Windows & Mac CLI makes it easy to remove duplicate files using each file's md5 hash.

This comes in handy when downloading bulk data (csvs/images/pdfs/etc) where there are lot of the same file, but with different filenames.

- Is this foolproof? No.
- Is this probably stupid? Probably.

## Install
[Latest release](https://github.com/Meandmybadself/uniqbyhash/releases/tag/1.0.0)

## Usage
`uniqbyhash <path-to-directory> --dryrun`

### Parameters

- `path-to-directory` - directory to scan for duplicate files (required)
- `--dryrun` - perform dryrun with no file deletion, reporting files to-be-deleted.