const express = require('express')
const Phone = require('../models/phone')
const sharp = require('sharp')
const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

exports.addPhone = async(req,res) => {
    try {
        const {name,model,warranty, accessories, battery} = req.body
        const images = req.files.images
        let data;
        if(req.files){
            data = await uploadImg(images)
        }

        const phone = await Phone.create({
            name,
            model,
            warranty,
            accessories,
            battery,
            images: data
        })

        res.status(200).json(phone)
    } catch (error) {
        console.log(error)
    }
}

exports.getPhones = async(req,res) => {
    try {
        const response = await Phone.find({})

        res.status(200).json(response)
    } catch (error) {
        console.log(error)
    }
}

exports.getPhone = async(req,res) => {
    try {
        const id = req.params.id

        const data = await Phone.findById(id);

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

exports.deletePhone = async(req,res) => {
    try {
        const id = req.params.id

        const data = await Phone.findByIdAndDelete(id)

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

const uploadImg = async (images) => {
    try {
        //  console.log(images)
        let imageArray = [];
        for(let i=0; i<images.length; i++){
            let result = await cloudinary.uploader.upload(images[i].tempFilePath, {
                folder: 'phone'
            })

            imageArray.push({
                public_id: result.public_id,
                secure_url: result.secure_url
            })
        }
      return imageArray;
    } catch (error) {
      throw error;
    }
  };