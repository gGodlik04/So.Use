<?
if (!empty($arResult['ITEMS'])) {

    foreach ($arResult['ITEMS'] as $key => $arItem) { ?>

        <? if ($key == 6) {                                       // Ждем 6 итерацию цикла
            
            foreach ($arResult['ITEMS'] as $key => $arItemSep) {  // Еще раз проходимся по массиву элементов
                if ($arItemSep['SRC'] == 'separator.png'){?>      // Ищем элемент подгрузившийся в компоненту

                    <div class="image">
                        <a href="<?= $arItemSep['DETAIL_PAGE_URL'] ?>">
                            <?
                            if ($arItemSep["DETAIL_PICTURE"]["SRC"] != "") {
                                $picture = CFile::ResizeImageGet(
                                    $arItemSep["DETAIL_PICTURE"],
                                    array('width' => 325, 'height' => 200),
                                    BX_RESIZE_IMAGE_EXACT,
                                    true,
                                    array(array("name" => "sharpen", "precision" => 15))
                                ); ?>
                                <img alt="<?= $arItemSep["NAME"] ?>" title="<?= $arItemSep["NAME"] ?>" src="<?=
                                                                                                        $picture["src"] ?>">
                            <? } else { ?>
                                <img alt="<?= $arItemSep["NAME"] ?>" title="<?= $arItemSep["NAME"] ?>" src="<?= $arFilters["SRC"]; ?>">
                            <? } ?>
                        </a>
                    </div>

                <?}

            }
         } else {
                echo 'no separator image';
         } ?>

        <div class="image">
            <a href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
                <?
                if ($arItem["DETAIL_PICTURE"]["SRC"] != "") {
                    $picture = CFile::ResizeImageGet(
                        $arItem["DETAIL_PICTURE"],
                        array('width' => 325, 'height' => 200),
                        BX_RESIZE_IMAGE_EXACT,
                        true,
                        array(array("name" => "sharpen", "precision" => 15))
                    ); ?>
                    <img alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" src="<?=
                                                                                            $picture["src"] ?>">
                <? } else { ?>
                    <img alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" src="<?= $arFilters["SRC"]; ?>">
                <? } ?>
            </a>
        </div>

<? }} else {
    echo 'No data';
} ?>