# What is BOM, baby don't hurt me, no more...
**BOM - Byte Order Mark** - is Unicode character (`U+FEFF`) which is placed at the start of the text stream. Its appearence at the start of the text stream means that:

- the byte order of the text stream
- the fact that text stream is encoded in Unicode
- signals to a program which Unicode encoding the text stream is encoded

[Read more about BOM](https://en.wikipedia.org/wiki/Byte_order_mark)

# bom-bom
Parse directory, find files with bom and remove BOM from these files

## Install

`npm i` or `yarn`

## Use

This will simply scan target folder and recursively remove BOM from all files inside.

`npm run bom_bom /myfolder/new_folder/` or

`yarn bom_bom /myfolder/new_folder/`

Sometimes you don't want to touch all files. You can provide extension of files which yon wanna cure.

`npm run bom_bom /myfolder/new_folder/ .js` or

`yarn bom_bom /myfolder/new_folder/ .js`

Get files from target dir and rewrite 'em w/o BOM. Hooray.

## Check for BOM

To be ensured that final file/files doesn't contain BOM, you can use eslint:

`npm run lint`

If you have BOM in your files, you'll get following error:

![BOM Eslint error](https://user-images.githubusercontent.com/299118/42520000-e4fc658c-846d-11e8-9594-6f1ba723d5b4.png)

## Play

You can generate more files with BOM in case you have fixed previous files. Simply run:

`npm run gen_bom`
