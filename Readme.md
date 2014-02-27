
# normalize-case

  recursively normalize to camelcase

## Installation

```bash
$ component install yields/normalize-case
```

## Example

```js
normalize({
  api_key: 'baz',
  'first name': 'baz',
  last_name: 'foo',
  array: [{ Name: 'baz' }, { 'names  ': [{ A: 1 }] }]
});
```

```js
{
  apiKey: 'baz',
  firstName: 'baz',
  lastName: 'foo',
  array: [{ name: 'baz' }, { names: [{ a: 1 }] }]
}
```

## License

  (MIT)

