# 万里书院前端项目

这是万里书院的前端应用，使用Vue 3 + TypeScript + Vite构建。

## 功能特性

- 学生注册和登录
- 课程浏览和搜索
- 作业提交系统
- 个人资料管理
- 响应式设计

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vue Router
- Pinia (状态管理)
- Element Plus (UI组件库)
- Axios (HTTP客户端)

## 开发环境设置

### 前置要求

- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 环境配置

复制 `.env.example` 到 `.env` 并配置相应的环境变量：

```
VITE_API_BASE_URL=https://wanlirepo-production.up.railway.app/api
```

## 部署

本项目配置了自动部署到 Fly.io。当代码推送到 main 分支时，GitHub Actions 会自动构建和部署应用。

## 项目结构

```
src/
├── api/          # API 接口定义
├── assets/       # 静态资源
├── components/   # 可复用组件
├── router/       # 路由配置
├── stores/       # Pinia 状态管理
├── types/        # TypeScript 类型定义
├── views/        # 页面组件
├── App.vue       # 根组件
└── main.ts       # 应用入口
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证。