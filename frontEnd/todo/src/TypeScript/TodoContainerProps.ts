export interface TodoContainerProps {
  dataIsAdded: boolean,
  setDataIsAdded: React.Dispatch<React.SetStateAction<boolean>>;
  setEditData: React.Dispatch<React.SetStateAction<boolean>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  setDataId: React.Dispatch<React.SetStateAction<string>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}