// ให้สร้าง array result ให้ได้ผลลัพธ์ตามเงื่อนไขที่กำหนด โดยใช้ arr.filter

const array = [
  { name: 'John', birth: '2001-07-31' },
  { name: 'Jack', birth: '1990-06-24' },
  { name: 'Jim', birth: '1984-12-13' },
  { name: 'Jeff', birth: '1996-02-05' },
  { name: 'Joe', birth: '2002-06-13' }
];

const result = array.filter(arr => {
    const month = new Date(arr.birth).getMonth();
    if (month === (6-1)) {
      return arr
    }
})

console.log(result)
// เกิดเดือน 6