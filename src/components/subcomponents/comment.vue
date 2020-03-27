<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容。" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户：纪耀立&nbsp;&nbsp;发表时间：{{date | dateFormat}}
                </div>
                <div class="cmt-body">
                    春眠不觉晓，处处闻啼鸟。
                    夜来风雨声，花落知多少。
                </div>
            </div>
                        <div class="cmt-item">
                <div class="cmt-title">
                    第2楼&nbsp;&nbsp;用户：纪耀立&nbsp;&nbsp;发表时间：{{date | dateFormat}}
                </div>
                <div class="cmt-body">
                    春眠不觉晓，处处闻啼鸟。
                    夜来风雨声，花落知多少。
                </div>
            </div>
                        <div class="cmt-item">
                <div class="cmt-title">
                    第3楼&nbsp;&nbsp;用户：纪耀立&nbsp;&nbsp;发表时间：{{date | dateFormat}}
                </div>
                <div class="cmt-body">
                    春眠不觉晓，处处闻啼鸟。
                    夜来风雨声，花落知多少。
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            date: new Date()
        }
    },
}
</script>

<style lang="scss" scoped>
.comment-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 86px;
        margin: 0;
    }

    .cmt-list{
        margin: 5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 35px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 30px;
                text-indent: 2em;
            }
        }
    }

}
</style>