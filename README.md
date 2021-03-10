### 使用方法
Install packages
```
$ yarn install
```
Runs the app in the development mode.
```
$ yarn start
```

You can change to your own AppID and AppKey

### 架構設計
1. 因為每個要call api的檔案都要用到產生header的function (雖然這邊只有一個檔案)，所以把他獨立提出來
2. 因為全部縣市和個別縣市的架構相同，只有api網址不同，所以使用同一個Page component，在Route的地方加了一個prop判別
3. CSS的部分一律使用styled-components，較簡單明瞭也不容易混亂
