<template>
  <div class="kindeditor-component">
    <textarea :id="id" name="content" v-model="outContent"></textarea>
  </div>
</template>
<style type="text/css">

.ke-icon-example2 {
  background-image: url("./static/kindeditor/themes/default/abc.png");
  background-size:45px 17px;
  width: 45px;
  height: 17px;
}
.ke-menu{
  border: 1px solid #A0A0A0;
  background-color: #F1F1F1;
  color: #222222;
  padding: 2px;
  font-family: "sans serif",tahoma,verdana,helvetica;
  font-size: 12px;
  text-align: left;
  overflow: hidden;
  height: 200px;
  overflow-y: scroll;
}
</style>

<script>
  import './static/kindeditor/kindeditor-all.js'
  import './static/kindeditor/themes/default/default.css'

  export default {
    name: 'kindEditor',
    data() {
      return {
        editor: null,
        outContent: this.content,
        outReadonly: this.readonly
      }
    },
    props: {
      words:{
        type: Array,
        default: ''
      },
      content: {
        type: String,
        default: ''
      },
      id: {
        type: String,
        required: true
      },
      width: {
        type: String
      },
      height: {
        type: String
      },
      minWidth: {
        type: Number,
        default: 666
      },
      minHeight: {
        type: Number,
        default: 100
      },
      items: {
        type: Array,
        default: function () {
          return [
            'source', '|', 'undo', 'redo', '|', 'preview', 'print', 'template', 'code', 'cut', 'copy', 'paste',
            'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
            'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
            'superscript', 'clearhtml', 'quickformat', 'selectall', '|', 'fullscreen', '/',
            'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
            'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
            'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'baidumap', 'pagebreak',
            'anchor', 'link', 'unlink', '|', 'about','example2'
          ]
        }
      },
      noDisableItems: {
        type: Array,
        default: function () {
          return ['source', 'fullscreen']
        }
      },
      filterMode: {
        type: Boolean,
        default: true
      },
      htmlTags: {
        type: Object,
        default: function () {
          return {
            font: ['color', 'size', 'face', '.background-color'],
            span: ['style'],
            div: ['class', 'align', 'style'],
            table: ['class', 'border', 'cellspacing', 'cellpadding', 'width', 'height', 'align', 'style'],
            'td,th': ['class', 'align', 'valign', 'width', 'height', 'colspan', 'rowspan', 'bgcolor', 'style'],
            a: ['class', 'href', 'target', 'name', 'style'],
            embed: ['src', 'width', 'height', 'type', 'loop', 'autostart', 'quality',
              'style', 'align', 'allowscriptaccess', '/'],
            img: ['src', 'width', 'height', 'border', 'alt', 'title', 'align', 'style', '/'],
            hr: ['class', '/'],
            br: ['/'],
            'p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6': ['align', 'style'],
            'tbody,tr,strong,b,sub,sup,em,i,u,strike': []
          }
        }
      },
      wellFormatMode: {
        type: Boolean,
        default: true
      },
      resizeType: {
        type: Number,
        default: 2
      },
      themeType: {
        type: String,
        default: 'default'
      },
      langType: {
        type: String,
        default: 'zh-CN'
      },
      designMode: {
        type: Boolean,
        default: true
      },
      fullscreenMode: {
        type: Boolean,
        default: false
      },
      basePath: {
        type: String
      },
      themesPath: {
        type: String
      },
      pluginsPath: {
        type: String,
        default: ''
      },
      langPath: {
        type: String
      },
      minChangeSize: {
        type: Number,
        default: 5
      },
      loadStyleMode: {
        type: Boolean,
        default: true
      },
      urlType: {
        type: String,
        default: ''
      },
      newlineTag: {
        type: String,
        default: 'p'
      },
      pasteType: {
        type: Number,
        default: 2
      },
      dialogAlignType: {
        type: String,
        default: 'page'
      },
      shadowMode: {
        type: Boolean,
        default: true
      },
      zIndex: {
        type: Number,
        default: 811213
      },
      useContextmenu: {
        type: Boolean,
        default: true
      },
      syncType: {
        type: String,
        default: 'form'
      },
      indentChar: {
        type: String,
        default: '\t'
      },
      cssPath: {
        type: [String, Array]
      },
      cssData: {
        type: String
      },
      bodyClass: {
        type: String,
        default: 'ke-content'
      },
      colorTable: {
        type: Array
      },
      insertHtml: {
        type: Function
      },
      afterCreate: {
        type: Function
      },
      afterChange: {
        type: Function
      },
      afterTab: {
        type: Function
      },
      afterFocus: {
        type: Function
      },
      afterBlur: {
        type: Function
      },
      afterUpload: {
        type: Function
      },
      uploadJson: {
        type: String
      },
      fileManagerJson: {
        type: String
      },
      allowPreviewEmoticons: {
        type: Boolean,
        default: true
      },
      allowImageUpload: {
        type: Boolean,
        default: true
      },
      allowFlashUpload: {
        type: Boolean,
        default: true
      },
      allowMediaUpload: {
        type: Boolean,
        default: true
      },
      allowFileUpload: {
        type: Boolean,
        default: true
      },
      allowFileManager: {
        type: Boolean,
        default: false
      },
      fontSizeTable: {
        type: Array,
        default: function () {
          return ['9px', '10px', '12px', '14px', '16px', '18px', '24px', '32px']
        }
      },
      imageTabIndex: {
        type: Number,
        default: 0
      },
      formatUploadUrl: {
        type: Boolean,
        default: true
      },
      fullscreenShortcut: {
        type: Boolean,
        default: false
      },
      extraFileUploadParams: {
        type: Object,
        default: function () {
          return {}
        }
      },
      filePostName: {
        type: String,
        default: 'imgFile'
      },
      fillDescAfterUploadImage: {
        type: Boolean,
        default: false
      },
      afterSelectFile: {
        type: Function
      },
      pagebreakHtml: {
        type: String,
        default: '<hr style="page-break-after: always;" class="ke-pagebreak" />'
      },
      allowImageRemote: {
        type: Boolean,
        default: true
      },
      autoHeightMode: {
        type: Boolean,
        default: false
      },
      fixToolBar: {
        type: Boolean,
        default: false
      },
      tabIndex: {
        type: Number
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      content(val) {
        this.editor && val !== this.outContent && this.editor.html(val)
      },
      readonly(val) {
        if (this.editor && val !== this.outReadonly) {
          this.editor.readonly(val)
          this.outReadonly = val
        }

      },
      outReadonly(val) {
        this.$emit('update:readonly', val)
      },
      outContent(val) {
        this.$emit('update:content', val)
        this.$emit('on-content-change', val)
      }
    },
    mounted() {
      // 初始访问时创建
      this.initEditor()
    },
    /**
     * keep-alive 会用到进入时调用activated 离开时调用deactivated
     * 初始访问 created、mounted 切换时deactivated 再次进入时 activated
     */
    activated() {
      // keep-alive 进入时创建
      this.initEditor()
    },
    deactivated() {
      // keep-alive 离开时移除
      this.removeEditor()
    },
    methods: {
      ins(a){
        window.KindEditor.insertHtml();
      },
      removeEditor() {
        window.KindEditor.remove('#' + this.id)
      },
      initEditor() {
        var _this = this
        _this.removeEditor()

        KindEditor.lang({
          example2 : '选择后将在合同内容中加入占位符'
        });
        KindEditor.plugin('example2', function(K) {
          var self = this, name = 'example2';
          function click(value) {
          }
          self.clickToolbar(name, function() {
            var menu = self.createMenu({
              name : name,
              width : 150
            });
            this.words
            window.KindEditor.each(this.words, function(i, val) {
              menu.addItem({
                title : '<span style="font-size:' + val.label + ';">' + val.label + '</span>',
                click : function() {
                  self.insertHtml(val.value);
                  menu.hide();
                },
                      // height : parseInt(val, 10) + 12,
                      //checked : val === a
              });
            });
          });
        });
        _this.editor = window.KindEditor.create('#' + this.id, {
          words:_this.words,
          width: _this.width,
          height: _this.height,
          minWidth: _this.minWidth,
          minHeight: _this.minHeight,
          items: _this.items,
          noDisableItems: _this.noDisableItems,
          filterMode: _this.filterMode,
          htmlTags: _this.htmlTags,
          wellFormatMode: _this.wellFormatMode,
          resizeType: _this.resizeType,
          themeType: _this.themeType,
          langType: _this.langType,
          designMode: _this.designMode,
          fullscreenMode: _this.fullscreenMode,
          basePath: _this.basePath,
          themesPath: _this.themesPath,
          pluginsPath: _this.pluginsPath,
          langPath: _this.langPath,
          minChangeSize: _this.minChangeSize,
          loadStyleMode: _this.loadStyleMode,
          urlType: _this.urlType,
          newlineTag: _this.newlineTag,
          pasteType: _this.pasteType,
          dialogAlignType: _this.dialogAlignType,
          shadowMode: _this.shadowMode,
          zIndex: _this.zIndex,
          useContextmenu: _this.useContextmenu,
          syncType: _this.syncType,
          indentChar: _this.indentChar,
          cssPath: _this.cssPath,
          cssData: _this.cssData,
          bodyClass: _this.bodyClass,
          colorTable: _this.colorTable,
          insertHtml: function (val) {
            _this.insertHtml;
            _this.insertHtml = this.html()
          },
          afterCreate: _this.afterCreate,
          afterChange: function () {
            _this.outContent = this.html()
          },
          afterTab: _this.afterTab,
          afterFocus: _this.afterFocus,
          afterBlur: _this.afterBlur,
          afterUpload: _this.afterUpload,
          uploadJson: _this.uploadJson,
          fileManagerJson: _this.fileManagerJson,
          allowPreviewEmoticons: _this.allowPreviewEmoticons,
          allowImageUpload: _this.allowImageUpload,
          allowFlashUpload: _this.allowFlashUpload,
          allowMediaUpload: _this.allowMediaUpload,
          allowFileUpload: _this.allowFileUpload,
          allowFileManager: _this.allowFileManager,
          fontSizeTable: _this.fontSizeTable,
          imageTabIndex: _this.imageTabIndex,
          formatUploadUrl: _this.formatUploadUrl,
          fullscreenShortcut: _this.fullscreenShortcut,
          extraFileUploadParams: _this.extraFileUploadParams,
          filePostName: _this.filePostName,
          fillDescAfterUploadImage: _this.fillDescAfterUploadImage,
          afterSelectFile: _this.afterSelectFile,
          pagebreakHtml: _this.pagebreakHtml,
          allowImageRemote: _this.allowImageRemote,
          autoHeightMode: _this.autoHeightMode,
          fixToolBar: _this.fixToolBar,
          tabIndex: _this.tabIndex
        })
        _this.editor.readonly(_this.outReadonly)
      }
    }
  }
</script>
