# xuqilong.top博客源码

DEV:
- `yarn` or `npm install`
- `yarn dev` or `npm run dev`

BUILD:
- `yarn` or `npm install`
- `yarn build` or `npm run build`

部署：
- Linux: `yarn deploy` or `npm run deploy`
- wind: 打开git窗口，执行`yarn deploy` or `npm run deploy`

centos自动化部署

- 部署脚本：`deploy-webhook.sh`
- webhook配置：`hooks.json`

```bash
#安装webhook
yum install -y golang
go get github.com/adnanh/webhook

#将部署脚本和webhook配置放在/root/.webhook下(路径可自己定义)
hooks.json: webhook配置
deploy-webhook.sh: 部署脚本
#执行命令
/root/go/bin/webhook -hooks /root/.webhook/hook.json -verbose &> /var/log/webhook.log &
```

