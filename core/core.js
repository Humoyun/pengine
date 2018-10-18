var gEngine = gEngine || {};
gEngine.Core = (function(){
  var mCanvas, mContext, mWidth = 800, mHeight = 450;
  mCanvas = document.getElementById('canvas');
  mContext = mCanvas.msGetInputContext('2d');
  mCanvas.width = mWidth;
  mCanvas.height = mHeight;

  var mPublic = {
    mWidth,
    mHeight,
    mContext
  };
  console.log('>>>', mPublic);
  
  return mPublic;
}());