import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  Image,
  StatusBar,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const HomeCommentsScreen: React.FC = () => {
  const [commentText, setCommentText] = useState('저도 함께 해보고');
  const [likedComments, setLikedComments] = useState(new Set([0])); // First comment is liked

  const handleLikeComment = (commentId: number) => {
    const newLikedComments = new Set(likedComments);
    if (newLikedComments.has(commentId)) {
      newLikedComments.delete(commentId);
    } else {
      newLikedComments.add(commentId);
    }
    setLikedComments(newLikedComments);
  };

  const handleReply = (commentId: number) => {
    console.log('Reply to comment:', commentId);
  };

  const handleSendComment = () => {
    console.log('Send comment:', commentText);
    setCommentText('');
  };

  const comments = [
    {
      id: 0,
      username: 'wetraver.min',
      timestamp: '1시간',
      text: '도쿄의 숨은 이야기 정말 흥미롭습니다. 저도 곧 여행 예정이예요! :)',
      likes: 1,
      avatar: require('../../assets/images/harrison-chang.jpg'),
    },
    {
      id: 1,
      username: 'wetraver.kk',
      timestamp: '1시간',
      text: '꼭 경험해 보세요!',
      likes: 0,
      avatar: require('../../assets/images/guiherme-stecanella.jpg'),
      hasReplies: true,
      replyText: '답글 숨기기',
    },
    {
      id: 2,
      username: 'kotokoto_uk',
      timestamp: '2시간',
      text: '잊지 못할 즐거운 여행이였습니다! 땡큐!!',
      likes: 3,
      avatar: require('../../assets/images/daniel-j.jpg'),
      hasReplies: true,
      replyText: '답글 3개 보기',
    },
    {
      id: 3,
      username: 'osaka_master',
      timestamp: '3시간',
      text: '함께 한 모든 곳이 만족스러웠습니다. 특히 맛집😊',
      likes: 3,
      avatar: require('../../assets/images/anthony-tran.jpg'),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Status Bar */}
      <View style={styles.statusBar}>
        <Text style={styles.timeText}>23:18</Text>
        <View style={styles.statusIcons}>
          <Icon name="signal-cellular-4-bar" size={16} color="#fff" />
          <Icon name="wifi" size={16} color="#fff" style={styles.statusIcon} />
          <Icon name="battery-full" size={16} color="#fff" style={styles.statusIcon} />
        </View>
      </View>

      {/* Modal Header */}
      <View style={styles.modalHeader}>
        <View style={styles.dragHandle} />
        <View style={styles.headerContent}>
          <Text style={styles.title}>댓글 97</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.headerIconButton}>
              <Icon name="send" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIconButton}>
              <Icon name="favorite" size={20} color="#FF6B6B" />
              <Text style={styles.likeCount}>1</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Comments List */}
      <ScrollView style={styles.commentsList} showsVerticalScrollIndicator={false}>
        {comments.map((comment) => (
          <View key={comment.id} style={styles.commentItem}>
            <Image source={comment.avatar} style={styles.commentAvatar} />
            <View style={styles.commentContent}>
              <View style={styles.commentHeader}>
                <Text style={styles.commentUsername}>{comment.username}</Text>
                <Text style={styles.commentTimestamp}>{comment.timestamp}</Text>
              </View>
              <Text style={styles.commentText}>{comment.text}</Text>
              <View style={styles.commentActions}>
                <TouchableOpacity 
                  style={styles.replyButton}
                  onPress={() => handleReply(comment.id)}
                >
                  <Text style={styles.replyText}>답글 달기</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.likeButton}
                  onPress={() => handleLikeComment(comment.id)}
                >
                  <Icon 
                    name="favorite" 
                    size={16} 
                    color={likedComments.has(comment.id) ? "#FF6B6B" : "#9CA3AF"} 
                  />
                  {comment.likes > 0 && (
                    <Text style={[
                      styles.commentLikeCount,
                      { color: likedComments.has(comment.id) ? "#FF6B6B" : "#9CA3AF" }
                    ]}>
                      {comment.likes}
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
              {comment.hasReplies && (
                <TouchableOpacity style={styles.repliesButton}>
                  <Text style={styles.repliesText}>{comment.replyText}</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Comment Input */}
      <View style={styles.commentInputContainer}>
        <Image 
          source={require('../../assets/images/harrison-chang.jpg')} 
          style={styles.inputAvatar} 
        />
        <TextInput
          style={styles.commentInput}
          value={commentText}
          onChangeText={setCommentText}
          placeholder="댓글을 입력하세요..."
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendComment}>
          <Icon name="keyboard-arrow-up" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Korean Keyboard Simulation */}
      <View style={styles.keyboardContainer}>
        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅂ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅈ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㄷ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㄱ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅅ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅕ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅐ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅔ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Icon name="backspace" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅁ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㄴ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅇ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㄹ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅎ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅗ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅓ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅏ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅣ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyButton}>
            <Icon name="keyboard-arrow-up" size={16} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅋ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅌ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅊ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅍ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅠ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>ㅜ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Icon name="backspace" size={16} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.keyboardRow}>
          <TouchableOpacity style={styles.keyButton}>
            <Text style={styles.keyText}>123</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Icon name="sentiment-satisfied" size={16} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.spaceButton}>
            <Text style={styles.spaceText}>스페이스</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keyButton}>
            <Icon name="keyboard-return" size={16} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* System Navigation Bar */}
      <View style={styles.systemNavBar}>
        <Icon name="language" size={16} color="#000" />
        <View style={styles.homeIndicator} />
        <Icon name="mic" size={16} color="#000" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  timeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 5,
  },
  modalHeader: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 15,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#D1D5DB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  likeCount: {
    fontSize: 14,
    color: '#FF6B6B',
    marginLeft: 4,
    fontWeight: '600',
  },
  commentsList: {
    flex: 1,
    backgroundColor: '#fff',
  },
  commentItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  commentUsername: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },
  commentTimestamp: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  commentText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 8,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replyButton: {
    marginRight: 15,
  },
  replyText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentLikeCount: {
    fontSize: 12,
    marginLeft: 4,
    fontWeight: '600',
  },
  repliesButton: {
    marginTop: 8,
  },
  repliesText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  inputAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentInput: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 14,
    color: '#374151',
    maxHeight: 100,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  keyboardContainer: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  keyButton: {
    width: 35,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  keyText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  spaceButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  spaceText: {
    fontSize: 12,
    color: '#6B7280',
  },
  systemNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#F3F4F6',
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 3,
  },
});

export default HomeCommentsScreen;
