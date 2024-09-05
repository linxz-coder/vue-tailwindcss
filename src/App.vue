<template>

  <div class="flex h-screen">
    <!-- 左侧区块 -->
    <div class="bg-white overflow-auto h-screen relative hidden md:block md:w-[300px]" id="leftSidebar">
      <!-- 头部 -->
      <div class="flex items-center justify-between px-4 py-2">
        <h1 class="text-3xl font-bold text-pink-500">ChatFUN</h1>
        <!-- 开始新对话 -->
        <button>
          <img src="/new.svg" width="20" height="20" alt="Start new chat" />
        </button>
      </div>

      <!-- 搜索框 -->
      <div class="px-4 flex items-center justify-between mb-4">
        <!-- <SearchInput @search="handleSearch" /> -->
      </div>

      <!-- 聊天列表 -->
      <div class="overflow-y-auto">
        <!-- <ChatItem v-for="(ssid, index) in displaySSIDs" :key="index" :ssid="ssid"
          :title="`对话${uniqueSSIDs.indexOf(ssid) + 1}`" :messages="messages.filter(message => message.ssid === ssid)"
          :isActive="ssid === activeChatId" @click="switchChat(ssid, `对话${uniqueSSIDs.indexOf(ssid) + 1}`)" /> -->
      </div>
    </div>

    <!-- 右侧区块 -->
    <div class="flex flex-1 flex-col bg-gray-100 h-screen">
      <!-- 聊天标题 -->
      <div class="flex-shrink-0">
        <!-- <ChatHeader :chatTitle="activeTitle" /> -->
      </div>

      <!-- 消息列表 -->
      <div class="flex-1 overflow-auto p-4">
        <!-- <Message v-for="(message, index) in filteredMessages" :key="index" :user="message.user === 'user'"
          :content="message.content" /> -->
      </div>

      <!-- 底部输入框 -->
      <div class="w-full border-t p-4">
        <!-- <TextInput @send="handleSendMessage" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { v4 as uuidv4 } from 'uuid'
// import ChatHeader from './components/ChatHeader.vue'
// import Message from './components/Message.vue'
// import TextInput from './components/TextInput.vue'
// import ChatItem from './components/ChatItem.vue'
// import SearchInput from './components/SearchInput.vue'

// 全局变量
// const bjtime = new Date().toLocaleString()

// ref 部分
// const uuid = ref(uuidv4())
// const sequenceRef = ref(0)
// const titleCount = ref(1)

// state 部分
// const messages = ref([{ ssid: uuid.value, seq: sequenceRef.value, user: 'ai', content: "有什么可以帮你的？", timestamp: bjtime }])
// const isProcessing = ref(false)
// const activeChatId = ref(uuid.value)
// const activeTitle = ref("对话1")
// const searchQuery = ref('')
// const filteredSSIDs = ref([])

// 计算属性
// const uniqueSSIDs = computed(() => [...new Set(messages.value.map(message => message.ssid))])
// const displaySSIDs = computed(() => searchQuery.value ? filteredSSIDs.value : uniqueSSIDs.value)
// const filteredMessages = computed(() => messages.value.filter(message => message.ssid === activeChatId.value))

// 方法
const startNewChat = () => {
  // 实现新建对话的逻辑
}

const handleSearch = (query) => {
  // 实现搜索功能
}

const switchChat = (ssid, title) => {
  // 实现切换对话的逻辑
}

const handleSendMessage = (text) => {
  // 实现发送消息的逻辑
}
</script>

<style scoped></style>