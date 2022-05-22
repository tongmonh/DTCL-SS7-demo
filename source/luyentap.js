// function sayHi(name){
// 	console.log(arguments)
// 	console.log(typeof arguments)
// }


// var user1= {
// 	age: 12
// }
// var user2= {
// 	age: 15
// }
// var user3= {
// 	age: 20
// }

// sayHi(user1, user2, user3,'Khoa', 'hung', 'huy');



// function pay(garen) {
// 	return function pal(zed)
// 	{
// 		console.log(garen + ' ' + 'con' + ' '+  zed);
// 	}
// }
// var hi = pay('anh')
// hi('em');

// function check(){
// 	var array = [];
// 	for(var i=0;i<3;i++)
// 		array [i]=function (){
// 			console.log(i);
// 		}
// 		return array ;
// }
// var num = check();
// num[0]();


// async function dowloadAvatar(url, success)
// {
// 	console.log('dowload avatar')
	
// 	await sleep(3000)

// 	console.log('dowload successfull')

// 	success()
// }
// function updateAvatar()
// {
// 	console.log('update avatar')
// }
// //dowloadAvatar('http', updateAvatar)

// setTimeout(function()
// 	{
// 		alert('toi la thai')
// 	}, 3000)



// user ={
// 	firstname: 'firstname',
// 	lastname: 'lastname',
// 	showName: function(){
// 		console.log(this.firstname + ' ' +  this.lastname);
// 	}
// }

// khoa = {
// 	firstname: 'khoa',
// 	lastname: 'nguyen'
// }
// console.log(Reflect.get(user, 'firstname'))

// console.log(Reflect.has(user, 'firstname'))

// Reflect.setPrototypeOf(khoa, user)

// khoa.showName()


// var a = 2

// var b = new String'abcd'

// var c = new Number(2)

// console.log(c)



// var user = {
// 	firstname: 'default',
// 	lastname: 'default'
// }
// var khoa = {}

// //khoa.__proto__ = user// khong dung kieu nay
// var khoa = Object.create(user);


// var a = 2;
// var b = 3;
// Number.prototype.square = function () {
// 	return this*this
// }
// Number.prototype.cube = function (){
// 	return this.square()*this
// }
// console.log(b.cube())



// class User{
//     constructor(firstname,lastname){
//         this.firstname = firstname
//         this.lastname = lastname
//     }
//     showName(){
//         return this.firstname + ' ' + this.lastname 
//     }

// }



// // function User(firstname,lastname){
// //     this.firstname = firstname
// //     this.lastname = lastname
// //     
// // }


// // User.prototype.showName = function(){

// // }


// var khoa = new User('Khoa','Nguyen')



// class User{
//     constructor(firstname, lastname){
//         this.firstname = firstname
//         this.lastname = lastname
//     }
//     showName(){
//         return this.firstname + ' ' + this.lastname 
//     }

// }
// class Student extends User{
// 	constructor(firstname,lastname, id){
// 		super(firstname, lastname)// Goi lai constructor cua lop cha
// 		this.id = id
// 	}
// 	showId(){
// 		return this.id
// 	}
// }

// var khoa = new Student('khoa', 'nguyen', '1234')
// khoa.showName()
// khoa.showId()



// function User(firstname, lastname){
// 	this.firstname = firstname
// 	this.lastname = lastname
// }

// User.prototype.showId = function(){
// 	return this.id
// }
// var Student = new User()
// Student.id = '1234'
// console.log(Student.showId())





//KHAI BAO BIEN TRONG ES6

// if (true){
// 	var i = 2
// }


// console.log(i)

// let address = 23

// address = 45

// let name = 'thai'
 
//  name = 'tue'

// const user = {
// 	firstname:'anh'
// }
//  user.firstname = 'em'

// var array = []

// for(let i = 0;i<5;i++ )// nen dung let thay var
// {
// 	array[i] = function (){
// 		console.log(i)
// 	}
// }

// array[0]()
// array[1]()
// array[2]()
// array[3]()
// array[4]()



//ARROW FUNCTION

// var hello = (ho, ten)=>{// đây là arrow function, có thể khai bào hàm kiểu này thay cho kiểu cũ
// 	console.log('xin chao ' + ho + ' ' + ten)
// }
// hello('ngoc', 'thai')

// var gender = gioitinh =>// nếu có 1 tham sô thì có thể dùng như thể này
// 	console.log('gioi tinh: ' + gioitinh)

// gender('nam')

// var numbers = [1,2,3,4,5,6,7,8,9]
// numbers.forEach(function(i){// liệt kê tất ả các phần tử trong mảng theo cách này
// 	console.log(i)
// })

// numbers.forEach(i=>{//  dùng arrow function như này để kiệt kê cũng được
// 	console.log(i)
// })



// var hi = function(){
//   console.log(this)
// }

// var sayHello = () => {
//   console.log(this)
// }


// hi()
// sayHello()

// var firstname = 'Hung'


// var user = {
//   firstname: 'Khoa',
//   showName: function(){
//     console.log(this)
//   },
//   logName: () => {
//     console.log(this)
//   }

// }
// user.showName()
// user.logName()

// function User(firstname){
//   this.firstname = 'Khoa'
// }


// User.prototype.showName = function(){
//     console.log(this)
//     console.log(this.firstname)
// }

// var khoa = new User()

// khoa.showName()

// Những trường hợp ko nên dung arrow function

// function User(firstname){
// 	this.firstname = 'khoa'
// }

// User.prototype.showName = () => {
// 	console.log(this)
// 	console.log(this.firstname)
// }



// var khoa = new User()

// khoa.showName()



//ES6 Destructuring


// let user = {
// 	firstname: 'khoa',
// 	lastname: 'nguyen',
// 	email: 'sgklop77@gmail.com',
// 	address:{
// 		number: 12,
// 		street:'dai trach'
// 	}
// }

// const firstname = user.firstname
// const lastname = user.lastname

// const {firstname, lastname, email} = user
// const {firstname: first, lastname: last, email: emai} = user
// const {address} = user
// const {number, street} = address


// let user = {
// 	firstname: 'khoa',
// 	lastname: 'nguyen',
// 	email: 'sgklop77@gmail.com',
// 	address:{
// 		number: 12,
// 		street:'dai trach'
// 	}
// }

// const {firstname: first, lastname: last, email: emai} = user
// const {address} = user
// const {number, street, house = '42'} = address// thêm vào object




//DESTRUCTURING CHO ARRAY

// var names = ['khoa', 'hung', 'lam', 'quyen', 'linh', 'thuan']

// const[first, second, third, ...girlnames ] = names

// var students = new Map()

// students.set('id1', {name:'khoa', age: 18})
// students.set('id2', {name:'hung'})
// students.set('id3', {name:'lam'})

// // for([id,info] of students){
// // 	const {name, age = 12} = info
// // 	console.log(`${name} is ${age} has is: ${id}`)
// // }
// for(student of students){
// 	const id = student[0]
// 	const name = student[1].name
// 	const age = student[1].age || 17
// 	console.log(`${name} is ${age} has is: ${id}`)
// }


// function sayHi(){
// 	return{
// 		en:'hello',
// 		vn:'xin chao',
// 		cn:'chao xin',
// 		sp:'ho la'
// 	}
// }
// const { en: english, vn: vietnamese} = sayHi()

// var names = ['khoa','Hung', 'khoi']
// function logInfo([first, second, third]){
// 	console.log(`hello ${first} ${second} ${third}` )
// }

// logInfo(names)






//SPREAD OPERATOR... VS...REST OPERATOR

// const  iphones = ["iphone4", "iphone5", "iphone6"];
// const macbook = ["macbook2012", "macbook2013", "macbook2014"]
// // const  iphone = ["iphone7", "iphone8", "iphone10"];

// //1. concat array
//  //const appleProduct = iphones.concat(macbook,iphone)

//  const appleProduct = [...iphones,'iphone7', 'iphone7s', 'macbook2019', ...macbook,'macbook2020']

//  //2.spread a string


//  //3.Coppy array
//  const oldMode = [...iphones]
//  oldMode[0] = 'iphone3s'// nguy hiểm do: nó đổi cả mảng cũ 
// const values = [69,96,1,21,1,12,3]
// function sum(){
// 	var total = 0
// 	for(const value of arguments){// arguments sẽ lấy danh sách đối số chuyền vào , và sẽ bỏ vào arguments
// 		total +=value
// 	}
// 	return total
// }
// console.log(sum(...values))// tính tổng tất cả các phần tử có trong mảng

//1.parameter os function
//2.destructuring
// ...rest tách array ra
// ...spread gom lại thành array
// function GPA(math, literature,...rest) {
// 	return ((math*2 + literature*2 + sum(...rest))/(rest.length)+4)

// }
// console.log(GPA(8,6,4,5,3))

// const vietNam = [
// "Nguyen huu thang",
// "nguyen cong phuong",
// "luong xuan truong",
// "nguyen van toan",
// "nguyen tuan anh",
// "phan van duc",
// "ha duc chinh"
// ]

// const [coach, captain, ...player] = vietNam






//OBJECT LITERALS UPGRADE
//Property value shorthand - cùng tên bỏ được

// var first = 'khoa'
// var last = 'nguyen'

// var user = {
// 	firstName: first,
// 	last
// }

// function logInfo({address}){
// 	console.log(address)
// }
// let address = 'HCM'// dowload from service

// var user1 = {
// 	address
// }
// logInfo(user1)

// METHOD definition shorthand - hàm ngắn gọn

// var user = {
// 	showname: function(name){},
// 	showage: function(age){},
// 	showaddress: function(address){}
// };

// var user = {
// 	age: 18,
// 	showname(name){
// 		console.log(this)
// 		console.log(name)
// 	},
// 	showaddress(address){
// 		console.log(address)
// 	}
// }

// user.showname('khoa')


//COMPUTED PROPERTY KEYS:

// let objKey = 'name'// trường hợp thuộc tính object chưa được biết trước, nên sài cái này]
// var country ={
// 	[objKey]:'Vietnam',
// 	[objKey+'abb']:'VN'
// }






//PROMISE
//Fetch API

// console.log("start downloading pokemons");

// const pokemonPromise = fetch(
//   "http://pokeapi.co/api/v2/evolution-chain/?limit=120&offset=200"
// );

// console.log(typeof pokemonPromise);

// console.log(pokemonPromise)

// pokemonPromise
//   .then(response => {
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// console.log("finish downloading pokemons");




// HAM EVAL
// eval('var age = 20')

// console.log(age)





//USE STRICT
 // function sayHi(){
 // 	age = 20
 // 	console.log(age)
 // }
 //  sayHi()




 // ARRay mo rong

 const companies = ["FPT", "VNG", "Viettel", "Intel", "Apple", "Facebook"];

// 1 truyen thong

// for (let i = 0; i < companies.length; i++){
//   if ( companies[i] === 'VNG'  ){
//     // continue;
//     break;
//   }
//   console.log(companies[i])
// }

// 2. Functional 

// companies.forEach(company => {
  
//   console.log(company);
// });

// 3. For ... in 

// Array.prototype.deleteAll = function(){
//   console.log('deleteAll feature here')
// }
// Array.prototype.deleteAll2 = function() {
//   console.log("deleteAll2 feature here");
// };

// for (const index in companies  ){
//   // console.log(typeof index)
//   // console.log(index)
  
//   console.log(`cong ty ${companies[index]} co STT: ${Number(index) + 1}`);
// }

// 4. For ... of 

// for (const [index,company] of companies.entries()){
//   console.log(`cong ty ${company} co STT: ${index + 1}`);
// }

var website = 'niviki.com'

// for (const char in website){
//   console.log(char)
// }

// function sum(){
//   var total = 0
//   console.log(typeof arguments)
//   for (const element of arguments){
//     total += element
//   }
//   console.log(total)
// }

// sum(12,1,231,23,123,2)

const companyObj = {
  fpt: {
    name: "fpt"
  },
  vng: {
    name: "vng"
  },
  viettel: {
    name: 'viettel'
  },
  apple: {
    name: 'apple'
  },
};

// for (var key in companyObj) {
//   if (companyObj.hasOwnProperty(key)) {
//     var element = companyObj[key];
//     console.log(element);
//   }
//   console.log(key)
// }

for ( var prop of Object.keys(companyObj) ){
  console.log(companyObj[prop])
}