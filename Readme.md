###1.git clone (克隆下来)
###2.npm install （安装需要的依赖）
###3.npm run w （启动监听）

###5.登录localhost:3000

###多人协作流程

>git remote  ---查看远程库信息
>git remote -v   ---显示详尽信息
>git branch ---查看本地分支

####开始
* git branch  ---查看分支
* git checkout djl|zp|ls  ---切换进自己的分支
* 在自己的本地分支修改代码，待修改完成
* git add .   ---将本地的代码add进一个虚拟空间
* git status   ---查看状态
* git commit -m "写自己提交的注释，说明自己做的什么工作"
* git status   ---再次查看自己状态
* git branch   ---查看分支
* git checkout dev  ---切换到dev分支
* git pull   ---将远程分支拉下来
* git merge djl|zp|ls   ---将自己的分支代码merge到dev分支
* 解决冲突（必须和冲突部分代码书写人沟通之后）重新上传到dev分支
* git status   ---查看状态
* 如果自己修改的部分是红色的
* git add 自己修改的部分，例如public/src/index.js
* git commit -m "注释"
* git push origin dev (git push)   ---将本地dev分支上传到组织的dev分支
* git branch
* git checkout djl|zp|ls

1. ！注意尽量小步提交
2. ！注意查看git曲线
3. ！可以了解git rebase  但是减少使用