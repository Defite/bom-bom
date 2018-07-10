# bom-bom
Parse directory, find files with bom and remove bom from these files

## Install

`npm i`

## Use

`npm run bom_bom`

Get files from targer dir and rewrite 'em w/o BOM. Hooray.

## Check for BOM

To be ensured that final file doesn't contain BOM, you can use eslint:

`npm run lint`

If you have BOM in your files, you'll get following error:

![BOM Eslint error](https://user-images.githubusercontent.com/299118/42520000-e4fc658c-846d-11e8-9594-6f1ba723d5b4.png)

## Play

You can generate more files with BOM in case you have fixed previous files. Simply run:

`npm run gen_bom`
