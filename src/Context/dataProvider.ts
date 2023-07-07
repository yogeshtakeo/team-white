import React , {useState} from 'react'
const dataContext=React.createContext<DataContextProps>({})
interface Item {
    title: string;
    text?: string;
    img?: string;
  }
  interface DataContextProps {
    data: Item[];
  }
  
  const initialState: Item[] = [
    {
      title: 'Routing Number',
      text: '...',
      img: 'img1',
    },
    {
      title: 'Routing',
      text: '...',
    },
    {
      title: 'Referrals',
      text: '...',
    },
    {
      title: 'Credit Cards',
    },
    {
      title: 'Customer Services',
    },
  ];
const dataProvider:React.FC = ({children}) => {
    const [data, setdata]=useState<Item[]>(initialState)
  return (
    <dataContext.Provider value={{data}}>
      {children}
    </dataContext.Provider>
  )
}

export default {dataProvider,dataContext}