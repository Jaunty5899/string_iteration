const txt = document.querySelector("input[type='text']");
const btn = document.querySelector("input[type='submit']");
const table = document.querySelector("tbody");

const separator = (subject) => {
  let array = subject.trim().split(" ").map(e=>e.trim());
  to_count(array);
};

const to_count = (array=[]) => {
  let count_word = {};
  // let counter = 0;
  array.forEach((element) => {
    // for(let i in  array){
    //   if (element==array[i])
    //     counter++;
    //   // console.log({element:array[i]})      
    // }
    // count_obj[element] = counter; //dynamic key in object
    count_word[element]=count_word[element]?count_word[element]+1:1;
    // counter=0;
    // console.log({counter});
  });
  // console.log(count_word);
  to_list(count_word);
};

const to_list = (table_data) => {
  table.innerHTML='';
  for (let key in table_data) {
    console.log(`${key} = ${table_data[key]}`); //important
    table.innerHTML += `<tr>
    <td class="border border-dark-subtle border-3 p-2">${key}</td>
    <td class="border border-dark-subtle border-3 p-2 text-bg-success">${table_data[key]}</td>
  </tr>`;
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let txt_backup = txt.value;
  //   console.log(txt_backup);
  separator(txt_backup);
});
