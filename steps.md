# steps

1. create the repo.

2. config the `.gitignore` file

3. config the `.editorconfig` file

   ```plain
    # Editor configuration, see https://editorconfig.org
    root = true

    [*]
    charset = utf-8
    indent_style = space
    indent_size = 2
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.ts]
    quote_type = single

    [*.md]
    max_line_length = off
    trim_trailing_whitespace = false>

4. install `npm init -y`

5. install typescript: `npm i typescript --save-dev`

6. check the instalation: `npx tsc --version`

7. init typescript: `npx tsc --init`

8. config `ouDir` in the `tsconfig.json`

9. install `npm i ts-node -D` to work with the transpilled file
