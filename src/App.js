import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
function App() {
  const customer = [
    {
      id: 1,
      'image' : 'https://picsum.photos/64',
      name: '홍길동',
      'birthday': '861018',
      'gender': '남자',
      'job': '대학생'
    },
    {
      id: 2,
      'image' : 'https://picsum.photos/64',
      name: '김성진',
      'birthday': '961018',
      'gender': '남자',
      'job': '개발자'
    },
    {
      id: 3,
      'image' : 'https://picsum.photos/64',
      name: '나동빈',
      'birthday': '761018',
      'gender': '여자',
      'job': '디자이너'
    }
  ]
  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          customer.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )
          })
        }
        </TableBody>
      </Table>
  ); 
}

export default App;
