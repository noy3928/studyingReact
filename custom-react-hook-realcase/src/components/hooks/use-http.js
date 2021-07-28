import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
              method: requestConfig.method ? requestConfig.method : 'GET',
              headers: requestConfig.headers ? requestConfig.headers : {},
              body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data)
  
        const loadedTasks = [];
  
        for (const taskKey in data) {
          loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }
  
      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
  
return {
    isLoading,
    error,
    sendRequest,
};
};

export default useHttp;
//커밋 메시지 띄워쓰기 확인
//한번 더 확인