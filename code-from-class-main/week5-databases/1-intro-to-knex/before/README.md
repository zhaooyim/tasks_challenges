Create a configuration file

```
npm run knex init

// change module.exports to export default
```

create table/migration

```
npm run knex migrate:make <table_name>
```

migrate the table
```
npm run knex migrate:latest
```

create a seed file
```
npm run knex seed:make <table_name>

// Use this dummy data: 

[
    {
      id: 1,
      title: 'Purple Rain',
      artist: 'Prince',
      stock_level: '2',
      is_favorite: false,
    },
    {
      id: 2,
      title: 'SOS',
      artist: 'SZA',
      stock_level: '1',
      is_favorite: false,
    },
    {
      id: 3,
      title: 'Are We There Yet?',
      artist: 'Dizzy Fae',
      stock_level: '3',
      is_favorite: false,
    },
    {
      id: 4,
      title: 'Come Get It!',
      artist: 'Rick James',
      stock_level: '2',
      is_favorite: false,
    },
    {
      id: 5,
      title: 'GUTS (spilled)',
      artist: 'Olivia Rodrigo',
      stock_level: '0',
      is_favorite: false,
    },
  ]
```

run the seeds
```
npm run knex seed:run
```


