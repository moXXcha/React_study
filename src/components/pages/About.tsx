import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// データの型定義
type Post = {
  id: number;
  title: string;
  body: string;
};

export const About = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse<Post[]> = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='text-3xl m-4'>Example with Axios</h1>

      <h2 className='text-2xl m-4'>Posts</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id} className='m-4'>
            <p className='font-bold text-xl'>{post.title}</p>
            <p>{post.body}</p>
          </li>
        ))}
        a
      </ul>
    </div>
  );
}

export default About