<template>

  <div class="flex h-screen">
    <!-- 左侧区块 -->
    <div class="bg-white overflow-auto h-screen relative hidden md:block md:w-[300px]" id="leftSidebar">
      <!-- 头部 -->
      <div class="flex items-center justify-between px-4 py-2">
        <h1 class="text-3xl font-bold text-pink-500">ChatFUN</h1>
        <!-- 开始新对话 -->
        <el-button circle>
          <img src="/new.svg" width="20" height="20" alt="Start new chat" />
        </el-button>
      </div>

      <!-- 搜索框 -->
      <div class="mt-4 px-4 mb-4">
        <!-- <SearchInput @search="handleSearch" /> -->
        <el-input placeholder="搜素..." v-model="searchValue">
          <template #append>
            <el-button :icon="Search" />
          </template>
        </el-input>
      </div>

      <!-- 聊天列表 -->
      <div class="overflow-y-auto">
        <div class="px-4 py-2 font-bold text-lg">
          对话标题
        </div>
        <div class="px-4 py-2 text-sm">
          最后一条消息
        </div>
      </div>
    </div>

    <!-- 右侧区块 -->
    <div class="flex flex-1 flex-col bg-gray-100 h-screen">
      <!-- 聊天标题 -->
      <div class="p-6 border-b">
        <h1 class="text-xl font-bold text-gray-500">对话标题</h1>
      </div>

      <!-- 消息列表 -->
      <div class="flex-1 overflow-auto p-4" ref="messageContainer">
        <div v-for="(message, index) in messages" :key="index"
          :class="{ 'flex': true, 'flex-row-reverse': message.user === 'me' }">
          <div class='min-w-[40px] min-h-[40px]'>
            <img :src="message.user === 'ai' ? '/robot_ai.png' : '/me.png'" class="rounded-full" width=40 height=40
              alt="avatar" />
          </div>
          <div
            :class="{ 'flex flex-col mr-14 ml-3 mb-5': message.user === 'ai', 'flex flex-col mr-3 ml-14 mb-5': message.user === 'me' }">
            <div
              :class="{ 'px-4 py-2 rounded-lg shadow-lg md:max-w-fit': true, 'bg-white text-black': message.user === 'ai', 'bg-green-500 text-white': message.user === 'me' }">
              {{ message.content }}
            </div>
          </div>
        </div>
      </div>

      <!-- 底部输入框 -->
      <div class="w-full border-t p-4">
        <el-input placeholder="请输入..." v-model="userInputValue" @keyup.enter="sendMessage" :disabled="isProcessing">
          <template #append>
            <el-button :icon="Promotion" @click="sendMessage" :disabled="isProcessing" />
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Search, Promotion } from '@element-plus/icons-vue'
import axios from 'axios'

// 数据
let userInputValue = ref('')
let searchValue = ref('')
let messages = ref([])
let isProcessing = ref(false)
let isInitialized = ref(false)

// 方法
async function sendMessage() {
  if (userInputValue.value.trim() === '') return

  // 添加用户消息
  messages.value.push({ user: 'me', content: userInputValue.value })
  const userMessage = userInputValue.value
  userInputValue.value = ''

  // 准备 AI 回复
  isProcessing.value = true
  messages.value.push({ user: 'ai', content: '' })


  // AI 回复
  try {
    const response = await axios.post('http://localhost:5328/api/python', {
      content: userMessage,
      chatHistory: JSON.stringify(messages.value)
    }, {
      responseType: 'text',
      onDownloadProgress: progressEvent => {
        const dataChunk = progressEvent.event.target.response
        messages.value[messages.value.length - 1].content += dataChunk
      }
    })
  } catch (error) {
    console.error('Error:', error)
    messages.value[messages.value.length - 1].content = '抱歉，发生了错误。请稍后再试。'
  } finally {
    isProcessing.value = false
  }
}

// 初始化聊天
function initializeChat() {
  messages.value.push({ user: 'ai', content: '你好，有什么可以帮助你的。' })
}

// 生命周期钩子
onMounted(() => {
  // 初始化聊天
  initializeChat()
})

</script>

<style scoped></style>