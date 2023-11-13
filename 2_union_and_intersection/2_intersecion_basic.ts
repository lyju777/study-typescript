interface Human {
  name: string;
  age: number;
}

interface Contacts {
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: "코드팩토리",
  age: 32,
  phone: "01023929392",
  address: "서울",
};

type NumberAndstring = number & string;

// let numberAndstring: NumberAndstring = undefined;
