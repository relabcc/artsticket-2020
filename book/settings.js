var option_PDFF = {
 
   /* BASIC SETTINGS */  
    openPage: 1,
    height: '100%',
    enableSound: true,
    downloadEnable: true, 
    direction: pdfflip.DIRECTION.LTR,
    autoPlay: true,
    autoPlayStart: false,
    autoPlayDuration: 3000,
    autoEnableOutline: false,
    autoEnableThumbnail: false,


	/* TRANSLATE INTERFACE */  
 
    text: {
      toggleSound: "聲音",
      toggleThumbnails: "預覽縮圖",
      toggleOutline: "目錄",
      previousPage: "上一頁",
      nextPage: "下一頁",
      toggleFullscreen: "全螢幕",
      zoomIn: "放大",
      zoomOut: "縮小",
      downloadPDFFile: "下載PDF",
      gotoFirstPage: "第一頁",
      gotoLastPage: "最末頁",
      play: "自動翻頁",
      pause: "停止自動翻頁",
      share: "分享"
    },

	/* ADVANCED SETTINGS */  

    hard: "none",
    overwritePDFOutline: true,
    duration: 1000,
pageMode: pdfflip.PAGE_MODE.DOUBLE,
singlePageMode: pdfflip.SINGLE_PAGE_MODE.BOOKLET,
	transparent: false,
	scrollWheel: true,
    zoomRatio: 1.5,
	maxTextureSize: 1600,
	backgroundImage: "pflip/background.jpg",
    backgroundColor: "#fff",
    controlsPosition: pdfflip.CONTROLSPOSITION.BOTTOM,
    allControls: "thumbnail,play,altPrev,pageNumber,altNext,zoomIn,zoomOut,fullScreen,download,sound,share",
    hideControls: "outline,startPage,endPage",

};

var pdfflipLocation = "./pflip/";