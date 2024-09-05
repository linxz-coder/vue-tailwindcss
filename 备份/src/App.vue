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
        <!-- <ChatItem v-for="(ssid, index) in displaySSIDs" :key="index" :ssid="ssid"
          :title="`对话${uniqueSSIDs.indexOf(ssid) + 1}`" :messages="messages.filter(message => message.ssid === ssid)"
          :isActive="ssid === activeChatId" @click="switchChat(ssid, `对话${uniqueSSIDs.indexOf(ssid) + 1}`)" /> -->
      </div>
    </div>

    <!-- 右侧区块 -->
    <div class="flex flex-1 flex-col bg-gray-100 h-screen">
      <!-- 聊天标题 -->
      <div class="p-6 border-b">
        <h1 class="text-xl font-bold text-gray-500">对话标题</h1>
        <!-- <ChatHeader :chatTitle="activeTitle" /> -->
      </div>

      <!-- 消息列表 -->
      <div class="flex-1 overflow-auto p-4">

        <div class="flex">
          <div class='min-w-[40px] min-h-[40px]'>
            <img src="/robot_ai.png" class="rounded-full" width=40 height=40 alt="avatar" />
          </div>
          <div class="flex flex-col mr-14 ml-3">
            <div class="px-4 py-2 rounded-lg shadow-lg md:max-w-fit bg-white text-black">
              你好呀
            </div>
          </div>
        </div>

        <div class="flex flex-row-reverse">
          <div class='min-w-[40px] min-h-[40px]'>
            <img src="/me.png" class="rounded-full" width=40 height=40 alt="avatar" />
          </div>
          <div class="flex flex-col mr-3 ml-14">
            <div class="px-4 py-2 rounded-lg shadow-lg md:max-w-fit bg-green-500 text-white">
              我要一个AI
            </div>
          </div>
        </div>
        <!-- <Message v-for="(message, index) in filteredMessages" :key="index" :user="message.user === 'user'"
          :content="message.content" /> -->
      </div>

      <!-- 底部输入框 -->
      <div class="w-full border-t p-4">
        <!-- <TextInput @send="handleSendMessage" /> -->
        <el-input placeholder="请输入..." v-model="userInputValue">
          <template #append>
            <el-button :icon="Promotion" />
          </template>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search, Promotion } from '@element-plus/icons-vue'

// 数据
let userInputValue = ref('')
let searchValue = ref('')

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