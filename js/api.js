const DATA_SERVER = 'https://23.javascript.pages.academy/keksobooking/data';
const SENDING_DATA_SERVER = 'https://23.javascript.pages.academy/keksobooking';

const getData = (onSuccess, onFail) => {
  fetch(DATA_SERVER)
    .then((response) => response.json())
    .then((ads) => {
      onSuccess(ads);
    })
    .catch(() => {
      onFail('При загрузке данных с сервера произошла. Попробуйте ещё раз');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SENDING_DATA_SERVER,
    {
      method: 'POST',
      enctype: 'multipart/form-data',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
