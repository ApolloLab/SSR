###1.git clone (克隆下来)
###2.npm install （安装需要的依赖）
###3.npm run w （启动监听）

###5.登录localhost:3000

###多人协作流程

>git remote  ---查看远程库信息
>git remote -v   ---显示详尽信息
>git branch ---查看本地分支

####开始
* git checkout -b dev origin/dev  ---创建远程dev分支
* git checkout -b  qinqi  ---创建自己的分支
* 在自己的分支进行工作，待自己某一模块写好
* git branch ---查看本地分支
* 保证在自己本地分支进行下面操作
* git add .   ---将本地的代码add进一个虚拟空间
* git status   ---查看状态
* git commit -m "写自己提交的注释，说明自己做的什么工作"
* git status   ---再次查看自己状态
* git branch   ---查看分支
* git checkout dev  ---切换到dev分支
* git pull  ---将远程分之拉下来
* git merge qinqi   ---将自己的分支代码merge到dev分支
* git push origin dev    ---将本地dev分支上传到组织的dev分支
* 如果出现上传错误  根据提示  git pull ---将远程代码拉下来
* 解决冲突（必须和冲突部分代码书写人沟通之后）重新上传到dev分支

1. ！注意尽量小步提交
2. ！注意查看git曲线
3. ！可以了解git rebase  但是减少使用