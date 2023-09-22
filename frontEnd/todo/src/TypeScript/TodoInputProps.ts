export interface TodoInputProps {
  dataIsAdded: boolean,
  setDataIsAdded: React.Dispatch<React.SetStateAction<boolean>>;
  editData: boolean,
  setEditData: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  dataId: string,
  completed: boolean,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}