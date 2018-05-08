const buffer_from_string_1 = Buffer.from('nodeTest', 'utf8');
const buffer_from_buffer_2 = Buffer.from(buffer_from_string_1);
const buffer_from_array_3 = Buffer.from([1, 2, 3]);
const buffer_alloc = Buffer.alloc(10);

buffer_alloc.write('hello node buffer');

console.log(buffer_from_string_1.toString());
console.log(buffer_from_buffer_2.toString());
console.log(buffer_from_array_3.toJSON());
console.log(buffer_alloc.toString());

// concat
const buffer_concat = Buffer.concat([buffer_from_string_1, buffer_from_buffer_2]);
console.log(buffer_concat.toString());

// compare - 0: 相同, -1: 之前，1: 之后
const buffer_compare_result = buffer_concat.compare(buffer_from_string_1);
console.log(buffer_compare_result);

// copy: 把 buffer_from_string_1 插入 buffer_concat
const buffer_copy = buffer_from_string_1.copy(buffer_concat, 0, 2);
console.log(buffer_concat.toString());

// slice