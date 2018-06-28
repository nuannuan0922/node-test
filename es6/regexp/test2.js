var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
var output = ["---------- Original String\n", names + "\n"];
var pattern = /\s*;\s*/;
var nameList = names.split(pattern);
console.log(nameList);

pattern = /(\w+)\s+(\w+)/;

var bySurnameList = [];
output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

output.push("---------- Names Reversed");

for (i = 0, len = bySurnameList.length; i < len; i++){
    output.push(bySurnameList[i]);
}

bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));