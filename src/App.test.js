import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jayeeta/i);
  expect(linkElement).toBeInTheDocument();

  const input=screen.getByRole("textbox")
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "username")
  expect(input).toHaveAttribute("id", "userId")

  const placeholder=screen.getByPlaceholderText("type here")
  expect(placeholder).toBeInTheDocument();
});
 
describe.skip("testcase for UI", ()=>{
  test("test case 1" ,()=>{
  render(<App />);
  const linkElement = screen.getByText(/Jayeeta/i);
  expect(linkElement).toBeInTheDocument();

  })

  test("test case 2" ,()=>{
    render(<App />);
    const linkElement = screen.getByText(/Jayeeta/i);
    expect(linkElement).toBeInTheDocument();
  
    })

    test("test case 3" ,()=>{
      render(<App />);
      const linkElement = screen.getByText(/Jayeeta/i);
      expect(linkElement).toBeInTheDocument();
    
      })
})

// describe.only("api testcase", ()=>{
//   test("api test case 1" ,()=>{
//   render(<App />);
//   const linkElement = screen.getByText(/Jayeeta/i);
//   expect(linkElement).toBeInTheDocument();

//   })

//   test("api test case 2" ,()=>{
//     render(<App />);
//     const linkElement = screen.getByText(/Jayeeta/i);
//     expect(linkElement).toBeInTheDocument();
  
//     })

//     test("api test case 3" ,()=>{
//       render(<App />);
//       const linkElement = screen.getByText(/Jayeeta/i);
//       expect(linkElement).toBeInTheDocument();
    
//       })
// })

describe("function testcase", ()=>{
  test("function test case 1" ,()=>{
  render(<App />);
  const linkElement = screen.getByText(/Jayeeta/i);
  expect(linkElement).toBeInTheDocument();

  })

  test("function test case 2" ,()=>{
    render(<App />);
    const linkElement = screen.getByText(/Jayeeta/i);
    expect(linkElement).toBeInTheDocument();
  
    })

    test("function test case 3" ,()=>{
      render(<App />);
      const linkElement = screen.getByText(/Jayeeta/i);
      expect(linkElement).toBeInTheDocument();
    
      })

      describe("inner testcase",()=>{
       
        test('inner1', () => {
          render(<App />);
          const linkElement = screen.getByText(/Jayeeta/i);
      expect(linkElement).toBeInTheDocument();
    
           })
      })
})