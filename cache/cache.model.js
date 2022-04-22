{
 key: { type: String, trim: true, maxlength: 255, required: true, unique: true, index: true },
 value: { type: Object },

 time:
  {
   expire: { type: Date, default: Date.now, expires: 0, index: true },
  },
}
