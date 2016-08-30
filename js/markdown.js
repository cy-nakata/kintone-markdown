(function() {
    "use strict";

    var showEvents = ['app.record.detail.show'];
    var editEvents = ['app.record.edit.show'];

    // Markdown 記法をパースして表示
    kintone.events.on(showEvents, function(event) {
        var record = event.record;
        var FieldEl = kintone.app.record.getFieldElement('md_contents');

        marked.setOptions({
          gfm: true,
          tables: true
        });
        FieldEl.innerHTML = marked(record['md_contents'].value);

        // CSS(github-markdown-css)を適用するための class を追加
        FieldEl.classList.add('markdown-body');

        return event;
    });

    // プレビューボタン押下時に Markdown 記法をプレビューする
    kintone.events.on(editEvents, function(event) {
        // スペースフィールドにボタンを設置
        var btn_Preview = document.createElement('button');
        btn_Preview.id = 'btn_preview';
        btn_Preview.innerHTML = 'プレビュー';
        kintone.app.record.getSpaceElement('btn_preview').appendChild(btn_Preview);

        //ボタン押下時の処理
        btn_Preview.onclick = function () {
            var record = kintone.app.record.get();
            var SpaceEl = kintone.app.record.getSpaceElement('md_preview');

            SpaceEl.innerHTML = marked(record.record['md_contents'].value);
            SpaceEl.classList.add('markdown-body');
            kintone.app.record.set(record);
        }

        return event;
    });
})();
