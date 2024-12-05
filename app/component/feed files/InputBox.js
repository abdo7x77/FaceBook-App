'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { CameraIcon, VideoCameraIcon, ChatBubbleOvalLeftIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import { SunIcon, ShareIcon } from '@heroicons/react/24/outline';
import { collection, addDoc, onSnapshot, serverTimestamp, updateDoc, arrayUnion, doc } from 'firebase/firestore';
import { db } from '../../../Firebase ';

// رفع الصورة إلى Cloudinary
const uploadToCloudinary = async (file) => {
  const CLOUDINARY_CLOUD_NAME = 'dzow6tioi';
  const CLOUDINARY_UPLOAD_PRESET = 'facebook';

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`Cloudinary upload failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    return null;
  }
};

export default function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const [commentText, setCommentText] = useState("");
  const [isCommenting, setIsCommenting] = useState(null);

  // جلب المنشورات من Firestore وترتيبها حسب آخر صورة تمت إضافتها
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts'),
      (snapshot) => {
        const sortedPosts = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => {
            // ترتيب حسب وجود صورة أولاً
            if (b.image && !a.image) return 1; // المنشور الذي يحتوي على صورة يأتي أولاً
            if (!b.image && a.image) return -1;

            // إذا كانت المنشورات تحتوي على صورة أو لا، قم بترتيبها حسب التاريخ
            return b.timestamp?.toDate() - a.timestamp?.toDate();
          });

        setPosts(sortedPosts);
      }
    );

    return unsubscribe;
  }, []);

  const SendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    try {
      let imageUrl = '';
      if (imageToPost) {
        imageUrl = await uploadToCloudinary(imageToPost);
      }

      await addDoc(collection(db, 'posts'), {
        message: inputRef.current.value,
        name: 'Abdo Ismail',
        email: 'abdelrhman1562004@gmail.com',
        image: imageUrl,
        timestamp: serverTimestamp(),
        comments: [], // إضافة مصفوفة الكومنتات
      });

      inputRef.current.value = '';
      setImageToPost(null);
    } catch (error) {
      console.error('Error adding document:', error);
    }
  };

  const AddImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const toggleLike = (postId) => {
    setLikedPosts((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const addComment = async (postId) => {
    if (!commentText) return;

    const postRef = doc(db, 'posts', postId);

    try {
      await updateDoc(postRef, {
        comments: arrayUnion({
          text: commentText,
          timestamp: serverTimestamp(), // استخدام serverTimestamp()
        }),
      });

      setCommentText(""); // مسح النص بعد الإرسال
      setIsCommenting(null); // إغلاق حقل الكومنت
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const removeComment = async (postId, commentText) => {
    const postRef = doc(db, 'posts', postId);
    try {
      await updateDoc(postRef, {
        comments: arrayRemove({ text: commentText }),
      });
    } catch (error) {
      console.error('Error removing comment:', error);
    }
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB"
          width={40}
          height={40}
          alt="Profile Picture"
        />
        <form className="flex flex-1" onSubmit={SendPost}>
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder="What’s on your mind, Abdo Ismail?"
          />
          <button hidden type="submit">
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={() => setImageToPost(null)}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img src={imageToPost} alt="Post" className="h-10 object-contain" />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 w-6 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 w-6 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input ref={filePickerRef} type="file" hidden onChange={AddImageToPost} />
        </div>
        <div className="inputIcon">
          <SunIcon className="h-7 w-6 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>

      <div>
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col bg-white border-t-8 pb-8 border-b-gray-300">
            <div className="p-5 mt-5 rounded-l-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <img
                  className="rounded-full"
                  src="https://scontent.fcai19-5.fna.fbcdn.net/v/t39.30808-6/466104779_940900997884465_6988365680746751153_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGtHpoU-eaIQNBVQXInz2zUxAH5Jl1pMerEAfkmXWkx6reQ5LCcaf-eydMdLKD1DnDz5ME4aOr5uhFn9M23N50E&_nc_ohc=KQTy9LG-e8MQ7kNvgF1lG9f&_nc_zt=23&_nc_ht=scontent.fcai19-5.fna&_nc_gid=ABmeraXJl90-rUlXta3tW7l&oh=00_AYDzHyxqJSFkts4wbUSV3NAEocWpxazYjRIOnwnq0MaBfA&oe=6755A5DB"
                  width={40}
                  height={40}
                  alt=""
                />
                <div>
                  <p className="font-medium">{post.name}</p>
                  <p className="text-5 text-gray-400">
                    {post.timestamp && post.timestamp.toDate
                      ? new Date(post.timestamp.toDate()).toLocaleString()
                      : 'No Date'}
                  </p>
                </div>
              </div>
              <p className="pt-4">{post.message}</p>
            </div>

            {post.image && (
              <div className="relative h-56 md:h-96 bg-white">
                <Image src={post.image} objectFit="cover" layout="fill" alt="" />
              </div>
            )}
            <div className="flex justify-between items-center rounded-b-2xl border-t border-gray-300 text-gray-500">
              <div
                className={`inputIcon ${likedPosts[post.id] ? 'text-blue-500' : ''}`}
                onClick={() => toggleLike(post.id)}
              >
                <HandThumbUpIcon className="h-4" />
                <p className="text-xs sm:text-base">Like</p>
              </div>
              <div
                className="inputIcon"
                onClick={() => setIsCommenting(post.id)}
              >
                <ChatBubbleOvalLeftIcon className="h-4" />
                <p className="text-xs sm:text-base">Comment</p>
              </div>
              <div className="inputIcon">
                <ShareIcon className="h-4" />
                <p className="text-xs sm:text-base">Share</p>
              </div>
            </div>

            {isCommenting === post.id && (
              <div className="mt-3">
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="3"
                  placeholder="Write a comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                  onClick={() => addComment(post.id)}
                  className="bg-blue-500 text-white p-2 rounded-md mt-2"
                >
                  Post Comment
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
