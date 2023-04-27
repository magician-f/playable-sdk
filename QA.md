# QA

- 名词定义 `super.html` 表示合并成1个后的html 
- 建议先用web-mobile来进行测试，没问题后再去测试合并成 `super.html`
  - 有些问题不是合并成一个后产生的，避免影响排查方向
  - 因为合并成 `super.html` 后，不好查问题

<br/>

## 原理

Q : 合并成 `super.html` 后，启动时间变慢了
A : 原来的web-mobile分散成了众多文件，加载文件的耗时分摊开来了，合并成 `super-html` 后，首次运行就要加载所有资源，并且有使用 `zip` 压缩的，还要有解压的耗时

***

## 报错

Q : caught ReferenceError: cc is not defined

A : 合成1个文件后，没有文件缓存问题

- 构建面板关闭勾选 `MD5 CACHE`

***

Q : TypeError: Br is not a function

A : 合并成`super.html` 后，不支持`wasm` 3D物理引擎的 `Bullet （ammo.js）`有 `wasm` 版本

- 选择其它3D物理引擎

***

<br/>

***
