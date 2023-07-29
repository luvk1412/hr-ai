import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: ${props => props.darkMode ? '#1e1e1e' : '#ffffff'};
  color: ${props => props.darkMode ? '#ffffff' : '#000000'};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.5s ease;
`;

export const DarkModeToggle = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.5s ease;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const MarkdownDisplay = styled.div`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.darkMode ? '#333' : '#f5f5f5'};
  border-radius: 5px;
  overflow: auto;
  box-shadow: 0 0 15px 4px rgba(0,0,0,0.06);
  transition: background-color 0.5s ease;
`;
