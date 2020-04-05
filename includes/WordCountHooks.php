<?php

class WordCountHooks {
    public static function doIt(EditPage $editPage, OutputPage $outputPage) {
        $outputPage->addModules('ext.wordCount');
        return true;
    }
}
?>
