## Usage

```yaml
      - uses: x-yuri/store-secret@master
        with:
          secret: ${{ secrets.MY_SECRET }}
          dst: path/to/some-file
```

## Contributing

To build the action:

```
$ npm run build
```
