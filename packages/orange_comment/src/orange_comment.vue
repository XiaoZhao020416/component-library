<template>
  <div>
    <div class="comment-section">
      <!-- 评论输入框 -->
      <div class="text-area">
        <textarea v-model="comment" placeholder="发表评论..." />
      </div>
      
      <!-- 预览评论 -->
      <div v-if="commentShow" class="comment-preview">
        <div style="margin-bottom: 8px;">预览：</div>
        <span>{{ comment || '输入内容试试~' }}</span >
      </div>

      <!-- 操作区域 -->
      <div class="operation-area">
        <!-- 发送 -->
        <svg @click="postComment" t="1712499376207" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5746" width="200" height="200"><path d="M978.7 67.5c0-0.1-0.1-0.1-0.1-0.2-2.1-4.1-5.1-7.8-8.8-10.8-3.6-3-7.7-5.2-12-6.6-0.1 0-0.2-0.1-0.3-0.1-1.7-0.6-3.5-0.9-5.3-1.2-0.5-0.1-1-0.3-1.6-0.3-1.7-0.2-3.3-0.2-5-0.1-0.7 0-1.3-0.1-2 0-4.8 0.3-9.6 1.7-14 3.9L61.5 482.6c-8.5 4.1-15 11.5-18 20.5-0.9 2.5-1.3 5.2-1.6 7.8-0.9 5.3-0.7 10.8 1 16 2.8 9.1 9.1 16.6 17.6 20.9l220.3 115.8c5.3 2.8 11.1 4.2 17.1 4.2 13.3 0.1 25.5-7.1 32-18.7 9.5-17.3 2.8-38.8-14.8-48.1l-161-84.6 647.5-321.2-394.9 453.5c-0.3 0.3-0.4 0.7-0.7 1-9.8 6.4-16.2 17.2-16.2 29.6v261.1c0.1 9.5 4 18.6 10.8 25.3 6.8 6.7 16 10.3 25.5 10.2v0.1c20 0 36.2-15.9 36.2-35.5V694.3L893.4 199l-89.6 653.3-227.3-109.2c-17.9-8.6-39.4-1.4-48.5 16.2-4.2 8.5-4.8 18.3-1.7 27.3 3.1 9 9.7 16.3 18.3 20.3l270.1 129.9c5 2.4 10.4 3.6 16 3.6 0.2 0 0.4-0.1 0.6-0.1 0.6 0 1.3 0.2 1.9 0.2 18 0.1 33.3-13 35.9-30.8l112-816.1c2.5-8.4 2-17.7-2.4-26.1z" p-id="5747"></path></svg>
        <!-- 选择表情 -->
        <div style="position: relative;">
          <svg @click="emojiShow = !emojiShow" t="1712499259152" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3698" width="200" height="200"><path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64z m0 832C299.936 896 128 724.064 128 512S299.936 128 512 128s384 171.936 384 384-171.936 384-384 384z" p-id="3699"></path><path d="M320 384m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3700"></path><path d="M704 384m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="3701"></path><path d="M224 512c0 159.072 128.928 288 288 288s288-128.928 288-288H224z" p-id="3702"></path></svg>
          <!-- 表情选择区域 -->
          <div v-if="emojiShow" class="emoji-selection">
            <div class="emoji-box" v-for="emoji in emojis" :key="emoji" @click="addEmoji(emoji)">
              {{ emoji }}
            </div>
          </div>
        </div>
        <!-- 预览 -->
        <svg @click="viewComment" t="1712498411383" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4177" width="200" height="200"><path d="M512 608a96 96 0 1 1 0-192 96 96 0 0 1 0 192m0-256c-88.224 0-160 71.776-160 160s71.776 160 160 160 160-71.776 160-160-71.776-160-160-160" fill="#000000" p-id="4178"></path><path d="M512 800c-212.064 0-384-256-384-288s171.936-288 384-288 384 256 384 288-171.936 288-384 288m0-640C265.248 160 64 443.008 64 512c0 68.992 201.248 352 448 352s448-283.008 448-352c0-68.992-201.248-352-448-352" fill="#000000" p-id="4179"></path></svg>
      </div>
    </div>
    <!-- 展示评论区域 -->
    <div class="comment-list">
      <h2>评论：</h2>
      <ul>
        <li v-for="(comment, index) in comments" :key="index">
          <div style="display: flex;justify-content: space-between;">
            <span>{{ comment.text }}</span>
            <span style="color: #ccc;">{{ comment.time }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orange-comment',
  data() {
    return {
      comment: "",
      comments: [{text: "这是第一条评论", time: "2024-04-07 22:27:23"}],
      emojis: [
        "😊", "😍", "😂", "😎", "😉", "🤣", "🤢",
        "😒", "😘", "😢", "😜", "😃", "🤔", "😆",
        "🙌", "✌", "🤞", "👌", "👍", "👏", "🤳", 
        "💋", "👀", "🤦‍♀️", "🤦‍♂️",  "🎁", "✔", "💕", 
        "🎉", "🌹", "💖", "🎂", "✨", "🎶", "🐱‍🏍"
      ],
      commentShow: false,
      emojiShow: false
    };
  },
  methods: {
    addEmoji(emoji) {
      this.comment += emoji;
      this.emojiShow = false;
    },
    postComment() {
      if (this.comment.trim() !== "") {
        const currentTime = new Date().toLocaleString().replace(/\//g, '-').replace(/(\b\d\b)/g, '0$1');
        this.comments.unshift({
          text: this.comment,
          time: currentTime
        });
        this.comment = "";
        this.commentShow = false;
        this.emojiShow = false;
      }
    },
    viewComment() {
      this.commentShow = !this.commentShow;
      this.emojiShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
svg {
  display: block;
  width: 22px;
  height: 22px;
  cursor: pointer;
  margin-right: 8px;
}
.comment-section {
  padding: 16px;
  border: 1px solid #ccc;

  .operation-area {
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 0;
  }

  .text-area {
    border-bottom: 1px dotted #ccc;
    margin-bottom: 15px;
  }

  textarea {
    resize: none;
    width: 98%;
    height: 100px;
    border-radius: 4px;
    margin-bottom: 20px;
    outline: none;
    border:none!important;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
    background-color: #f8f8f8;

    &:hover {
      background-color: #f1f1f1;
    }

    &:focus {
      outline: none;
      background-color: #f1f1f1;
    }
  }
  
  .comment-preview {
    margin-bottom: 10px;
    p {
      border: 1px solid #ccc;
      padding: 5px;
    }
  }
}
.comment-list {
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
  }
}
.emoji-selection {
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 999;
  width: 240px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, auto);
  border: 1px solid #ccc;
  background-color: #fff;

  .emoji-box {
    width: 23px;
    height: 23px;
    margin: 3px auto;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
  
    &:hover {
      background-color: #ccc;
    }
  }
}
</style>