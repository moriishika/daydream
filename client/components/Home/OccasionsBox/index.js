import "./OccasionsBox.js"
import "./OccasionsItem.js"
const occasionBox = document.querySelector('occasions-box')
console.log(occasionBox)
const dummy = [{
    img: '../../assets/images/3.jpg',
    title: 'Wedding',
    link: '#',
    desc: `Give the best moment for your wedding with our 
    beautiful flowers we guarantee the atmosphere 
    of your marriage with  your bride
    will be a very beautiful`
}];
occasionBox.occasions = dummy;

// ,{
//     img : 'anjing2',
//     title:'anjing2',
//     desc:'anjing2',
//     link:'anjing2'
// },{
//     img : 'anjing3',
//     title:'anjing3',
//     desc:'anjing3',
//     link:'anjing3'
// }]
