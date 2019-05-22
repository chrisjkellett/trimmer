#trimmer

has 3 methods for trimming punctuation from strings

```javascript
//.leading() returns any non alphanumeric characters from start of string
leading('??hello!!') returns '??';

//.trailing() returns any non alphanumeric characters from end of string
trailing('!!hello??') returns '!!'

//.strip() removes alphanumeric characters from start and end
strip('!!hel-lo??') returns 'hel-lo'
````
