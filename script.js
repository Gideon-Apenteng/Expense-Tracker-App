
const expenseList = JSON.parse(localStorage.getItem('expenseList')) || [
  {name: "Groceries",
    amount: "$50",
    date: "07-06-2024"
  }];

  renderExpenseList();
   function addExpense(){

    //Taking the input data of the expense name
    const nameInput = document.querySelector('.js-name');
    const name = nameInput.value;

    //Taking the input data of the expense amount
    const amountInput = document.querySelector('.js-amount');
    const amount = amountInput.value;

    //Taking input data of the expense date
    const dateInput = document.querySelector('.js-date');
    const date = dateInput.value;

    //Pushing all data's in to the expenseList

   // expenseList.push(`{${name} $${amount} ${date}}`);
    expenseList.push({name, amount: `$${amount}`, date});
   console.log(expenseList);
//Reseting the inputs when data is being sent
    nameInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
     renderExpenseList();

     //When we update the expenseList, save in localStorage.
     saveToStorage();

   }



   function renderExpenseList(){
       let expenseListHTML = "";
    //Looping through the expenseList
    for (i = 0; i < expenseList.length; i++) {
      const expenseObject = expenseList[i];
      const name = expenseObject.name;
      const amount = expenseObject.amount;
      const date = expenseObject.date;

      const HTML = `
      <p>
      ${name} - ${amount} - ${date}
      </p>
      <button onclick="
      expenseList.splice(${i}, 1);
       renderExpenseList();
      " class="delete-btn">X</button>
      
      `;
      expenseListHTML += HTML;

    }

    document.querySelector(".js-output").innerHTML = expenseListHTML;

   }

   function saveToStorage(){
    localStorage.setItem('expenseList', JSON.stringify(expenseList));
   }