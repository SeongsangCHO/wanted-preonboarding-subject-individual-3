export const getTodoListLastId = (key: string): number => {
  const todoListData = getLocalStorageItem(key);
  if (todoListData.length > 0) {
    return todoListData[todoListData.length - 1].id;
  }
  return 1;
};

export const getLocalStorageItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key)!) || [];
};

export const setLocalStorageItem = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};
