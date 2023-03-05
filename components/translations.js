/** load translations **/

class GWTranslations {
  constructor () {
    console.log("[GATEWAY] Translator Ready")
  }

  LoadGWTranslation(that) {
    return new Promise(resolve => {
      var Tr = {}
      Tr.Rotate_Msg = that.translate("GW_Rotate_Msg"),
      Tr.Rotate_Continue = that.translate("GW_Rotate_Continue"),

      Tr.Login_Welcome = that.translate("GW_Login_Welcome")
      Tr.Login_Username = that.translate("GW_Login_Username")
      Tr.Login_Password = that.translate("GW_Login_Password")
      Tr.Login_Error = that.translate("GW_Login_Error")
      Tr.Login_Login = that.translate("GW_Login_Login")

      Tr.Home = that.translate("GW_Home")
      Tr.Home_Welcome= that.translate("GW_Home_Welcome")

      Tr.Plugins = that.translate("GW_Plugins")
      Tr.Plugins_Welcome = that.translate("GW_Plugins_Welcome")
      Tr.Plugins_Table_Reset= that.translate("GW_Plugins_Table_Reset")
      Tr.Plugins_Table_Showing= that.translate("GW_Plugins_Table_Showing")
      Tr.Plugins_Table_Plugins= that.translate("GW_Plugins_Table_Plugins")
      Tr.Plugins_Table_Name= that.translate("GW_Plugins_Table_Name")
      Tr.Plugins_Table_Description= that.translate("GW_Plugins_Table_Description")
      Tr.Plugins_Table_Actions= that.translate("GW_Plugins_Table_Actions")
      Tr.Plugins_Table_Configuration= that.translate("GW_Plugins_Table_Configuration")
      Tr.Plugins_Table_Search= that.translate("GW_Plugins_Table_Search")
      Tr.Plugins_Table_Wiki = that.translate("GW_Plugins_Table_Wiki")
      Tr.Plugins_Table_Install = that.translate("GW_Plugins_Table_Install")
      Tr.Plugins_Table_Delete = that.translate("GW_Plugins_Table_Delete")
      Tr.Plugins_Table_Modify = that.translate("GW_Plugins_Table_Modify")
      Tr.Plugins_Table_Configure = that.translate("GW_Plugins_Table_Configure")
      Tr.Plugins_Table_DeleteConfig = that.translate("GW_Plugins_Table_DeleteConfig")
      Tr.Plugins_Delete_TerminalHeader = that.translate("GW_Plugins_Delete_TerminalHeader")
      Tr.Plugins_Delete_Message = that.translate("GW_Plugins_Delete_Message")
      Tr.Plugins_Delete_Progress = that.translate("GW_Plugins_Delete_Progress")
      Tr.Plugins_Delete_Confirmed = that.translate("GW_Plugins_Delete_Confirmed")
      Tr.Plugins_Install_TerminalHeader = that.translate("GW_Plugins_Install_TerminalHeader")
      Tr.Plugins_Install_Message = that.translate("GW_Plugins_Install_Message")
      Tr.Plugins_Install_Progress = that.translate("GW_Plugins_Install_Progress")
      Tr.Plugins_Install_Confirmed = that.translate("GW_Plugins_Install_Confirmed")
      Tr.Plugins_Initial_Title = that.translate("GW_Plugins_Initial_Title")
      Tr.Plugins_DeleteConfig_Title = that.translate("GW_Plugins_DeleteConfig_Title")
      Tr.Plugins_DeleteConfig_Confirmed = that.translate("GW_Plugins_DeleteConfig_Confirmed")
      Tr.Plugins_Modify_Title = that.translate("GW_Plugins_Modify_Title")
      Tr.Plugins_Error_Snowboy = that.translate("GW_Plugins_Error_Snowboy")
      Tr.Plugins_Error_Porcupine = that.translate("GW_Plugins_Error_Porcupine")

      Tr.Terminal = that.translate("GW_Terminal")
      Tr.TerminalOpen = that.translate("GW_TerminalOpen")
      Tr.TerminalGW = that.translate("GW_TerminalGW")

      Tr.Configuration = that.translate("GW_Configuration")
      Tr.Configuration_Welcome = that.translate("GW_Configuration_Welcome")
      Tr.Configuration_EditLoad = that.translate("GW_Configuration_EditLoad")
      Tr.Configuration_Edit_Title = that.translate("GW_Configuration_Edit_Title")
      Tr.Configuration_Edit_AcualConfig = that.translate("GW_Configuration_Edit_AcualConfig")

      Tr.Tools = that.translate("GW_Tools")
      Tr.Tools_Welcome = that.translate("GW_Tools_Welcome")
      Tr.Tools_subTitle = that.translate("GW_Tools_subTitle")
      Tr.Tools_Restart = that.translate("GW_Tools_Restart")
      Tr.Tools_Restart_Text1 = that.translate("GW_Tools_Restart_Text1")
      Tr.Tools_Restart_Text2 = that.translate("GW_Tools_Restart_Text2")
      Tr.Tools_Die = that.translate("GW_Tools_Die")
      Tr.Tools_Die_Text1 = that.translate("GW_Tools_Die_Text1")
      Tr.Tools_Die_Text2 = that.translate("GW_Tools_Die_Text2")
      Tr.Tools_Die_Text3 = that.translate("GW_Tools_Die_Text3")
      Tr.Tools_Webview_Header = that.translate("GW_Tools_Webview_Header")
      Tr.Tools_Webview_Needed = that.translate("GW_Tools_Webview_Needed")
      Tr.Tools_Backup_Found = that.translate("GW_Tools_Backup_Found")
      Tr.Tools_Backup_Text = that.translate("GW_Tools_Backup_Text")
      Tr.Tools_Backup_Deleted = that.translate("GW_Tools_Backup_Deleted")
      Tr.Tools_Screen_Text = that.translate("GW_Tools_Screen_Text")
      Tr.Tools_GoogleAssistant_Text = that.translate("GW_Tools_GoogleAssistant_Text")
      Tr.Tools_GoogleAssistant_Query = that.translate("GW_Tools_GoogleAssistant_Query")
      Tr.Tools_Alert_Text = that.translate("GW_Tools_Alert_Text")
      Tr.Tools_Alert_Query = that.translate("GW_Tools_Alert_Query")
      Tr.Tools_Volume_Text_Record = that.translate("GW_Tools_Volume_Text_Record")
      Tr.Tools_Volume_Text = that.translate("GW_Tools_Volume_Text")
      Tr.Tools_Volume_Text2 = that.translate("GW_Tools_Volume_Text2")
      Tr.Tools_Volume_Text3 = that.translate("GW_Tools_Volume_Text3")
      Tr.Tools_Spotify_Text = that.translate("GW_Tools_Spotify_Text")
      Tr.Tools_Spotify_Text2 = that.translate("GW_Tools_Spotify_Text2")
      Tr.Tools_Spotify_Query = that.translate("GW_Tools_Spotify_Query")
      Tr.Tools_Spotify_Artist = that.translate("GW_Tools_Spotify_Artist")
      Tr.Tools_Spotify_Track = that.translate("GW_Tools_Spotify_Track")
      Tr.Tools_Spotify_Album = that.translate("GW_Tools_Spotify_Album")
      Tr.Tools_Spotify_Playlist = that.translate("GW_Tools_Spotify_Playlist")
      Tr.Tools_Update_Header = that.translate("GW_Tools_Update_Header")
      Tr.Tools_Update_Text = that.translate("GW_Tools_Update_Text")
      Tr.Tools_Update_Text2 = that.translate("GW_Tools_Update_Text2")
      Tr.Tools_YouTube_Text = that.translate("GW_Tools_YouTube_Text")
      Tr.Tools_YouTube_Query = that.translate("GW_Tools_YouTube_Query")
      Tr.Tools_Stop_Text = that.translate("GW_Tools_Stop_Text")
      Tr.Tools_Radio_Text = that.translate("GW_Tools_Radio_Text")
      Tr.Tools_Radio_Text2 = that.translate("GW_Tools_Radio_Text2")

      Tr.Setting = that.translate("GW_Setting")
      Tr.Setting_Title = that.translate("GW_Setting_Title")
      Tr.Setting_Credentials = that.translate("GW_Setting_Credentials")
      Tr.Setting_Credentials_username = that.translate("GW_Setting_Credentials_username")
      Tr.Setting_Credentials_password = that.translate("GW_Setting_Credentials_password")
      Tr.Setting_Credentials_confirmpwd = that.translate("GW_Setting_Credentials_confirmpwd")
      Tr.Setting_Credentials_clientID = that.translate("GW_Setting_Credentials_clientID")
      Tr.Setting_Credentials_username_placeholder = that.translate("GW_Setting_Credentials_username_placeholder")
      Tr.Setting_Credentials_password_placeholder = that.translate("GW_Setting_Credentials_password_placeholder")
      Tr.Setting_Credentials_confirmpwd_placeholder = that.translate("GW_Setting_Credentials_confirmpwd_placeholder")
      Tr.Setting_Credentials_clientID_placeholder = that.translate("GW_Setting_Credentials_clientID_placeholder")
      Tr.Setting_Options = that.translate("GW_Setting_Options")
      Tr.Setting_Options_debug = that.translate("GW_Setting_Options_debug")
      Tr.Setting_Options_homegraph = that.translate("GW_Setting_Options_homegraph")
      Tr.Setting_Options_usePM2 = that.translate("GW_Setting_Options_usePM2")
      Tr.Setting_Options_PM2Id = that.translate("GW_Setting_Options_PM2Id")
      Tr.Setting_Info_by = that.translate("GW_Setting_Info_by")
      Tr.Setting_Info_Support = that.translate("GW_Setting_Info_Support")
      Tr.Setting_Info_Donate = that.translate("GW_Setting_Info_Donate")
      Tr.Setting_Info_Donate_Text = that.translate("GW_Setting_Info_Donate_Text")
      Tr.Setting_Info_About = that.translate("GW_Setting_Info_About")
      Tr.Setting_Info_Translator = that.translate("GW_Setting_Info_Translator")
      Tr.Setting_Info_Translator1 = that.translate("GW_Setting_Info_Translator1")
      Tr.Setting_Info_Translator2 = that.translate("GW_Setting_Info_Translator2")
      Tr.Setting_Info_Translator3 = that.translate("GW_Setting_Info_Translator3")
      Tr.Setting_Info_Translator4 = that.translate("GW_Setting_Info_Translator4")
      Tr.Setting_Info_Translator5 = that.translate("GW_Setting_Info_Translator5")
      Tr.Setting_Info_Translator6 = that.translate("GW_Setting_Info_Translator6")
      Tr.Setting_Info_Translator7 = that.translate("GW_Setting_Info_Translator7")
      Tr.Setting_Info_Translator8 = that.translate("GW_Setting_Info_Translator8")
      Tr.Setting_Info_Translator9 = that.translate("GW_Setting_Info_Translator9")
      Tr.Setting_Info_Translator10 = that.translate("GW_Setting_Info_Translator10")

      Tr.Logout = that.translate("GW_Logout")

      Tr.Delete = that.translate("GW_Delete"),
      Tr.Install = that.translate("GW_Install"),
      Tr.Configure = that.translate("GW_Configure"),
      Tr.Modify = that.translate("GW_Modify")
      Tr.Save = that.translate("GW_Save")
      Tr.Wait = that.translate("GW_Wait")
      Tr.Done = that.translate("GW_Done")
      Tr.Error = that.translate("GW_Error")
      Tr.Cancel = that.translate("GW_Cancel")
      Tr.Confirm = that.translate("GW_Confirm")
      Tr.Load = that.translate("GW_Load")
      Tr.Restart = that.translate("GW_Restart")
      Tr.ErrModule = that.translate("GW_ErrModule")
      Tr.Warn_Error = that.translate("GW_Warn_Error")
      Tr.LoadDefault = that.translate("GW_LoadDefault"),
      Tr.MergeDefault = that.translate("GW_MergeDefault")
      Tr.Send = that.translate("GW_Send")
      Tr.TurnOn = that.translate("GW_TurnOn")
      Tr.TurnOff = that.translate("GW_TurnOff")
      Tr.RequestDone = that.translate("GW_RequestDone")
      Tr.Listen = that.translate("GW_Listen")
      Tr.Update = that.translate("GW_Update")
      resolve(Tr)
    })
  }

  /** load descriptions **/
  LoadGWDescription(that) {
    return new Promise(resolve => {
      var desc = {}
      desc["EXT-Alert"] = that.translate("EXT-Alert")
      desc["EXT-Background"] = that.translate("EXT-Background")
      desc["EXT-Bring"] = that.translate("EXT-Bring")
      desc["EXT-Browser"] = that.translate("EXT-Browser")
      desc["EXT-Detector"] = that.translate("EXT-Detector")
      desc["EXT-FreeboxTV"] = that.translate("EXT-FreeboxTV")
      desc["EXT-GooglePhotos"] = that.translate("EXT-GooglePhotos")
      desc["EXT-Governor"] = that.translate("EXT-Governor")
      desc["EXT-Internet"] = that.translate("EXT-Internet")
      desc["EXT-Keyboard"] = that.translate("EXT-Keyboard")
      desc["EXT-Librespot"] = that.translate("EXT-Librespot")
      desc["EXT-Motion"] = that.translate("EXT-Motion")
      desc["EXT-MusicPlayer"] = that.translate("EXT-MusicPlayer")
      desc["EXT-Pages"] = that.translate("EXT-Pages")
      desc["EXT-Photos"] = that.translate("EXT-Photos")
      desc["EXT-Pir"] = that.translate("EXT-Pir")
      desc["EXT-RadioPlayer"] = that.translate("EXT-RadioPlayer")
      desc["EXT-Raspotify"] = that.translate("EXT-Raspotify")
      desc["EXT-Selfies"] = that.translate("EXT-Selfies")
      desc["EXT-SelfiesFlash"] = that.translate("EXT-SelfiesFlash")
      desc["EXT-SelfiesSender"] = that.translate("EXT-SelfiesSender")
      desc["EXT-SelfiesViewer"] = that.translate("EXT-SelfiesViewer")
      desc["EXT-Screen"] = that.translate("EXT-Screen")
      desc["EXT-ScreenManager"] = that.translate("EXT-ScreenManager")
      desc["EXT-ScreenTouch"] = that.translate("EXT-ScreenTouch")
      desc["EXT-Spotify"] = that.translate("EXT-Spotify")
      desc["EXT-SpotifyCanvasLyrics"] = that.translate("EXT-SpotifyCanvasLyrics")
      desc["EXT-StreamDeck"] = that.translate("EXT-StreamDeck")
      desc["EXT-UpdateNotification"] = that.translate("EXT-UpdateNotification")
      desc["EXT-Volume"] = that.translate("EXT-Volume")
      desc["EXT-Welcome"] = that.translate("EXT-Welcome")
      desc["EXT-YouTube"] = that.translate("EXT-YouTube")
      desc["EXT-YouTubeCast"] = that.translate("EXT-YouTubeCast")
      resolve(desc)
    })
  }

  /** load schema validation translations **/
  LoadGWTrSchemaValidation(that) {
    return new Promise(resolve => {
      var Tr = {}
      Tr.PluginDescription = that.translate("VAL_PluginDescription")
      Tr.PluginName = that.translate("VAL_PluginName")
      Tr.PluginDisable = that.translate("VAL_PluginDisable")
      Tr.PluginPosition = that.translate("VAL_PluginPosition")
      Tr.PluginConfigDeepMerge = that.translate("VAL_PluginConfigDeepMerge")
      Tr.PluginConfiguration = that.translate("VAL_PluginConfiguration")
      Tr.PluginDebug = that.translate("VAL_PluginDebug")
      Tr["EXT-Alert_ignore"] = that.translate("VAL_EXT-Alert_ignore")
      Tr["EXT-Background_Model"] = that.translate("VAL_EXT-Background_Model")
      Tr["EXT-Background_Image"] = that.translate("VAL_EXT-Background_Image")
      Tr["EXT-Bring_List"] = that.translate("VAL_EXT-Bring_List")
      Tr["EXT-Bring_Email"] = that.translate("VAL_EXT-Bring_Email")
      Tr["EXT-Bring_Password"] = that.translate("VAL_EXT-Bring_Password")
      Tr["EXT-Bring_Language"] = that.translate("VAL_EXT-Bring_Language")
      Tr["EXT-Bring_Colums"] = that.translate("VAL_EXT-Bring_Colums")
      Tr["EXT-Bring_Rows"] = that.translate("VAL_EXT-Bring_Rows")
      Tr["EXT-Bring_Update"] = that.translate("VAL_EXT-Bring_Update")
      Tr["EXT-Bring_Background"] = that.translate("VAL_EXT-Bring_Background")
      Tr["EXT-Bring_Box"] = that.translate("VAL_EXT-Bring_Box")
      Tr["EXT-Bring_Header"] = that.translate("VAL_EXT-Bring_Header")
      Tr["EXT-Browser_Delay"] = that.translate("VAL_EXT-Browser_Delay")
      Tr["EXT-Browser_Scroll"] = that.translate("VAL_EXT-Browser_Scroll")
      Tr["EXT-Browser_Step"] = that.translate("VAL_EXT-Browser_Step")
      Tr["EXT-Browser_Interval"] = that.translate("VAL_EXT-Browser_Interval")
      Tr["EXT-Browser_Start"] = that.translate("VAL_EXT-Browser_Start")
      Tr["EXT-Detector_Icon"] = that.translate("VAL_EXT-Detector_Icon")
      Tr["EXT-Detector_Touch"] = that.translate("VAL_EXT-Detector_Touch")
      Tr["EXT-Detector_Detector"] = that.translate("VAL_EXT-Detector_Detector")
      Tr["EXT-Detector_Engine"] = that.translate("VAL_EXT-Detector_Engine")
      Tr["EXT-Detector_Keyword"] = that.translate("VAL_EXT-Detector_Keyword")
      Tr["EXT-Detector_Sensitivity"] = that.translate("VAL_EXT-Detector_Sensitivity")
      Tr["EXT-Detector_AccessKey"] = that.translate("VAL_EXT-Detector_AccessKey")
      Tr["EXT-Detector_CustomModel"] = that.translate("VAL_EXT-Detector_CustomModel")
      Tr["EXT-GooglePhotos_Type"] = that.translate("VAL_EXT-GooglePhotos_Type")
      Tr["EXT-GooglePhotos_Delay"] = that.translate("VAL_EXT-GooglePhotos_Delay")
      Tr["EXT-GooglePhotos_Infos"] = that.translate("VAL_EXT-GooglePhotos_Infos")
      Tr["EXT-GooglePhotos_Albums"] = that.translate("VAL_EXT-GooglePhotos_Albums")
      Tr["EXT-GooglePhotos_Background"] = that.translate("VAL_EXT-GooglePhotos_Background")
      Tr["EXT-GooglePhotos_Sort"] = that.translate("VAL_EXT-GooglePhotos_Sort")
      Tr["EXT-GooglePhotos_HD"] = that.translate("VAL_EXT-GooglePhotos_HD")
      Tr["EXT-GooglePhotos_Format"] = that.translate("VAL_EXT-GooglePhotos_Format")
      Tr["EXT-GooglePhotos_Height"] = that.translate("VAL_EXT-GooglePhotos_Height")
      Tr["EXT-GooglePhotos_Width"] = that.translate("VAL_EXT-GooglePhotos_Width")
      Tr["EXT-GooglePhotos_uploadAlbum"] = that.translate("VAL_EXT-GooglePhotos_uploadAlbum")
      Tr["EXT-Governor_Sleep"] = that.translate("VAL_EXT-Governor_Sleep")
      Tr["EXT-Governor_Work"] = that.translate("VAL_EXT-Governor_Work")
      Tr["EXT-Internet_Ping"] = that.translate("VAL_EXT-Internet_Ping")
      Tr["EXT-Internet_Delay"] = that.translate("VAL_EXT-Internet_Delay")
      Tr["EXT-Internet_Scan"] = that.translate("VAL_EXT-Internet_Scan")
      Tr["EXT-Internet_Command"] = that.translate("VAL_EXT-Internet_Command")
      Tr["EXT-Internet_Alert"] = that.translate("VAL_EXT-Internet_Alert")
      Tr["EXT-Internet_Restart"] = that.translate("VAL_EXT-Internet_Restart")
      Tr["EXT-Keyboard_keyFinder"] =  that.translate("VAL_EXT-Keyboard_keyFinder")
      Tr["EXT-Keyboard_keys"] =  that.translate("VAL_EXT-Keyboard_keys")
      Tr["EXT-Keyboard_keycode"] =  that.translate("VAL_EXT-Keyboard_keycode")
      Tr["EXT-Keyboard_notification"] =  that.translate("VAL_EXT-Keyboard_notification")
      Tr["EXT-Keyboard_payload"] =  that.translate("VAL_EXT-Keyboard_payload")
      Tr["EXT-Keyboard_command"] =  that.translate("VAL_EXT-Keyboard_command")
      Tr["EXT-Keyboard_sound"] =  that.translate("VAL_EXT-Keyboard_sound")
      Tr["EXT-Librespot_Email"] = that.translate("VAL_EXT-Librespot_Email")
      Tr["EXT-Librespot_Password"] = that.translate("VAL_EXT-Librespot_Password")
      Tr["EXT-Librespot_Name"] = that.translate("VAL_EXT-Librespot_Name")
      Tr["EXT-Librespot_Min"] = that.translate("VAL_EXT-Librespot_Min")
      Tr["EXT-Librespot_Max"] = that.translate("VAL_EXT-Librespot_Max")
      Tr["EXT-Motion_captureIntervalTime"] = that.translate("VAL_EXT-Motion_captureIntervalTime")
      Tr["EXT-Motion_scoreThreshold"] = that.translate("VAL_EXT-Motion_scoreThreshold")
      Tr["EXT-Motion_deviceId"] = that.translate("VAL_EXT-Motion_deviceId")
      Tr["EXT-MusicPlayer_USB"] = that.translate("VAL_EXT-MusicPlayer_USB")
      Tr["EXT-MusicPlayer_Path"] = that.translate("VAL_EXT-MusicPlayer_Path")
      Tr["EXT-MusicPlayer_Check"] = that.translate("VAL_EXT-MusicPlayer_Check")
      Tr["EXT-MusicPlayer_Start"] = that.translate("VAL_EXT-MusicPlayer_Start")
      Tr["EXT-MusicPlayer_Min"] = that.translate("VAL_EXT-MusicPlayer_Min")
      Tr["EXT-MusicPlayer_Max"] = that.translate("VAL_EXT-MusicPlayer_Max")
      Tr["EXT-Pages_pages"] = that.translate("VAL_EXT-Pages_pages")
      Tr["EXT-Pages_fixed"] = that.translate("VAL_EXT-Pages_fixed")
      Tr["EXT-Pages_hiddenPages"] = that.translate("VAL_EXT-Pages_hiddenPages")
      Tr["EXT-Pages_animates"] = that.translate("VAL_EXT-Pages_animates")
      Tr["EXT-Pages_animationTime"] = that.translate("VAL_EXT-Pages_animationTime")
      Tr["EXT-Pages_rotationTime"] = that.translate("VAL_EXT-Pages_rotationTime")
      Tr["EXT-Pages_rotationTimes"] = that.translate("VAL_EXT-Pages_rotationTimes")
      Tr["EXT-Pages_rotationHomePage"] = that.translate("VAL_EXT-Pages_rotationHomePage")
      Tr["EXT-Pages_homePage"] = that.translate("VAL_EXT-Pages_homePage")
      Tr["EXT-Pages_indicator"] = that.translate("VAL_EXT-Pages_indicator")
      Tr["EXT-Pages_Gateway"] = that.translate("VAL_EXT-Pages_Gateway")
      Tr["EXT-Photos_Delay"] = that.translate("VAL_EXT-Photos_Delay")
      Tr["EXT-Photos_Loop"] = that.translate("VAL_EXT-Photos_Loop")
      Tr["EXT-Pir_GPIO"] = that.translate("VAL_EXT-Pir_GPIO")
      Tr["EXT-Pir_Reverse"] = that.translate("VAL_EXT-Pir_Reverse")
      Tr["EXT-RadioPlayer_Min"] = that.translate("VAL_EXT-RadioPlayer_Min")
      Tr["EXT-RadioPlayer_Max"] = that.translate("VAL_EXT-RadioPlayer_Max")
      Tr["EXT-Raspotify_Card"] = that.translate("VAL_EXT-Raspotify_Card")
      Tr["EXT-Selfies_captureWidth"] = that.translate("VAL_EXT-Selfies_captureWidth")
      Tr["EXT-Selfies_captureHeight"] = that.translate("VAL_EXT-Selfies_captureHeight")
      Tr["EXT-Selfies_device"] = that.translate("VAL_EXT-Selfies_device")
      Tr["EXT-Selfies_usePreview"] = that.translate("VAL_EXT-Selfies_usePreview")
      Tr["EXT-Selfies_previewWidth"] = that.translate("VAL_EXT-Selfies_previewWidth")
      Tr["EXT-Selfies_previewHeight"] = that.translate("VAL_EXT-Selfies_previewHeight")
      Tr["EXT-Selfies_displayButton"] = that.translate("VAL_EXT-Selfies_displayButton")
      Tr["EXT-Selfies_buttonStyle"] = that.translate("VAL_EXT-Selfies_buttonStyle")
      Tr["EXT-Selfies_buttons"] = that.translate("VAL_EXT-Selfies_buttons")
      Tr["EXT-Selfies_blinkButton"] = that.translate("VAL_EXT-Selfies_blinkButton")
      Tr["EXT-Selfies_playShutter"] = that.translate("VAL_EXT-Selfies_playShutter")
      Tr["EXT-Selfies_resultDuration"] = that.translate("VAL_EXT-Selfies_resultDuration")
      Tr["EXT-Selfies_autoValidate"] = that.translate("VAL_EXT-Selfies_autoValidate")
      Tr["EXT-Selfies_counterStyle"] = that.translate("VAL_EXT-Selfies_counterStyle")
      Tr["EXT-Selfies_showResult"] = that.translate("VAL_EXT-Selfies_showResult")
      Tr["EXT-SelfiesFlash_gpio"] = that.translate("VAL_EXT-SelfiesFlash_gpio")
      Tr["EXT-SelfiesSender_sendTelegramBotAuto"] = that.translate("VAL_EXT-SelfiesSender_sendTelegramBotAuto")
      Tr["EXT-SelfiesSender_sendGooglePhotos"] = that.translate("VAL_EXT-SelfiesSender_sendGooglePhotos")
      Tr["EXT-SelfiesSender_sendGooglePhotosAuto"] = that.translate("VAL_EXT-SelfiesSender_sendGooglePhotosAuto")
      Tr["EXT-SelfiesSender_sendMail"] = that.translate("VAL_EXT-SelfiesSender_sendMail")
      Tr["EXT-SelfiesSender_sendMailAuto"] = that.translate("VAL_EXT-SelfiesSender_sendMailAuto")
      Tr["EXT-SelfiesSender_sendMailConfig"] = that.translate("VAL_EXT-SelfiesSender_sendMailConfig")
      Tr["EXT-SelfiesSender_transport"] = that.translate("VAL_EXT-SelfiesSender_transport")
      Tr["EXT-SelfiesSender_host"] = that.translate("VAL_EXT-SelfiesSender_host")
      Tr["EXT-SelfiesSender_port"] = that.translate("VAL_EXT-SelfiesSender_port")
      Tr["EXT-SelfiesSender_secure"] = that.translate("VAL_EXT-SelfiesSender_secure")
      Tr["EXT-SelfiesSender_auth"] = that.translate("VAL_EXT-SelfiesSender_auth")
      Tr["EXT-SelfiesSender_user"] = that.translate("VAL_EXT-SelfiesSender_user")
      Tr["EXT-SelfiesSender_pass"] = that.translate("VAL_EXT-SelfiesSender_pass")
      Tr["EXT-SelfiesSender_message"] = that.translate("VAL_EXT-SelfiesSender_message")
      Tr["EXT-SelfiesSender_from"] = that.translate("VAL_EXT-SelfiesSender_from")
      Tr["EXT-SelfiesSender_to"] = that.translate("VAL_EXT-SelfiesSender_to")
      Tr["EXT-SelfiesSender_subject"] = that.translate("VAL_EXT-SelfiesSender_subject")
      Tr["EXT-SelfiesSender_text"] = that.translate("VAL_EXT-SelfiesSender_text")
      Tr["EXT-SelfiesViewer_moduleWidth"] = that.translate("VAL_EXT-SelfiesViewer_moduleWidth")
      Tr["EXT-SelfiesViewer_moduleHeight"] = that.translate("VAL_EXT-SelfiesViewer_moduleHeight")
      Tr["EXT-SelfiesViewer_displayDelay"] = that.translate("VAL_EXT-SelfiesViewer_displayDelay")
      Tr["EXT-SelfiesViewer_displayBackground"] = that.translate("VAL_EXT-SelfiesViewer_displayBackground")
      Tr["EXT-SelfiesViewer_sortBy"] = that.translate("VAL_EXT-SelfiesViewer_sortBy")
      Tr["EXT-Screen_Body"] = that.translate("VAL_EXT-Screen_Body")
      Tr["EXT-Screen_Delay"] = that.translate("VAL_EXT-Screen_Delay")
      Tr["EXT-Screen_Display"] = that.translate("VAL_EXT-Screen_Display")
      Tr["EXT-Screen_Mode"] = that.translate("VAL_EXT-Screen_Mode")
      Tr["EXT-Screen_Eco"] = that.translate("VAL_EXT-Screen_Eco")
      Tr["EXT-Screen_Counter"] = that.translate("VAL_EXT-Screen_Counter")
      Tr["EXT-Screen_Bar"] = that.translate("VAL_EXT-Screen_Bar")
      Tr["EXT-Screen_Style"] = that.translate("VAL_EXT-Screen_Style")
      Tr["EXT-Screen_Presence"] = that.translate("VAL_EXT-Screen_Presence")
      Tr["EXT-Screen_Date"] = that.translate("VAL_EXT-Screen_Date")
      Tr["EXT-Screen_Sleeping"] = that.translate("VAL_EXT-Screen_Sleeping")
      Tr["EXT-Screen_Hide"] = that.translate("VAL_EXT-Screen_Hide")
      Tr["EXT-Screen_Delayed"] = that.translate("VAL_EXT-Screen_Delayed")
      Tr["EXT-Screen_GPIO"] = that.translate("VAL_EXT-Screen_GPIO")
      Tr["EXT-Screen_Reset"] = that.translate("VAL_EXT-Screen_Reset")
      Tr["EXT-ScreenManager_Lock"] = that.translate("VAL_EXT-ScreenManager_Lock")
      Tr["EXT-ScreenManager_On"] = that.translate("VAL_EXT-ScreenManager_On")
      Tr["EXT-ScreenManager_Off"] = that.translate("VAL_EXT-ScreenManager_Off")
      Tr["EXT-ScreenTouch_Mode"] = that.translate("VAL_EXT-ScreenTouch_Mode")
      Tr["EXT-Spotify_Interval"] = that.translate("VAL_EXT-Spotify_Interval")
      Tr["EXT-Spotify_Idle"] = that.translate("VAL_EXT-Spotify_Idle")
      Tr["EXT-Spotify_BottomBar"] = that.translate("VAL_EXT-Spotify_BottomBar")
      Tr["EXT-Spotify_ID"] = that.translate("VAL_EXT-Spotify_ID")
      Tr["EXT-Spotify_Secret"] = that.translate("VAL_EXT-Spotify_Secret")
      Tr["EXT-StreamDeck_device"] = that.translate("VAL_EXT-StreamDeck_device")
      Tr["EXT-StreamDeck_brightness"] = that.translate("VAL_EXT-StreamDeck_brightness")
      Tr["EXT-StreamDeck_ecobrightness"] = that.translate("VAL_EXT-StreamDeck_ecobrightness")
      Tr["EXT-StreamDeck_ecotime"] = that.translate("VAL_EXT-StreamDeck_ecotime")
      Tr["EXT-StreamDeck_logo"] = that.translate("VAL_EXT-StreamDeck_logo")
      Tr["EXT-UpdateNotification_Interval"] = that.translate("VAL_EXT-UpdateNotification_Interval")
      Tr["EXT-UpdateNotification_Delay"] = that.translate("VAL_EXT-UpdateNotification_Delay")
      Tr["EXT-UpdateNotification_Ignore"] = that.translate("VAL_EXT-UpdateNotification_Ignore")
      Tr["EXT-UpdateNotification_Commands"] = that.translate("VAL_EXT-UpdateNotification_Commands")
      Tr["EXT-UpdateNotification_Module"] = that.translate("VAL_EXT-UpdateNotification_Module")
      Tr["EXT-UpdateNotification_Command"] = that.translate("VAL_EXT-UpdateNotification_Command")
      Tr["EXT-UpdateNotification_Notification"] = that.translate("VAL_EXT-UpdateNotification_Notification")
      Tr["EXT-UpdateNotification_TB"] = that.translate("VAL_EXT-UpdateNotification_TB")
      Tr["EXT-UpdateNotification_Ready"] = that.translate("VAL_EXT-UpdateNotification_Ready")
      Tr["EXT-UpdateNotification_Screen"] = that.translate("VAL_EXT-UpdateNotification_Screen")
      Tr["EXT-UpdateNotification_Callback"] = that.translate("VAL_EXT-UpdateNotification_Callback")
      Tr["EXT-UpdateNotification_Update"] = that.translate("VAL_EXT-UpdateNotification_Update")
      Tr["EXT-UpdateNotification_AutoUpdate"] = that.translate("VAL_EXT-UpdateNotification_AutoUpdate")
      Tr["EXT-UpdateNotification_AutoRestart"] = that.translate("VAL_EXT-UpdateNotification_AutoRestart")
      Tr["EXT-UpdateNotification_PM2"] = that.translate("VAL_EXT-UpdateNotification_PM2")
      Tr["EXT-UpdateNotification_DefaultCommand"] = that.translate("VAL_EXT-UpdateNotification_DefaultCommand")
      Tr["EXT-UpdateNotification_Log"] = that.translate("VAL_EXT-UpdateNotification_Log")
      Tr["EXT-UpdateNotification_Timeout"] = that.translate("VAL_EXT-UpdateNotification_Timeout")
      Tr["EXT-Volume_Script"] = that.translate("VAL_EXT-Volume_Script")
      Tr["EXT-Volume_Start"] = that.translate("VAL_EXT-Volume_Start")
      Tr["EXT-Welcome_Welcome"] = that.translate("VAL_EXT-Welcome_Welcome")
      Tr["EXT-YouTube_Fullscreen"] = that.translate("VAL_EXT-YouTube_Fullscreen")
      Tr["EXT-YouTube_Width"] = that.translate("VAL_EXT-YouTube_Width")
      Tr["EXT-YouTube_Height"] = that.translate("VAL_EXT-YouTube_Height")
      Tr["EXT-YouTube_Search"] = that.translate("VAL_EXT-YouTube_Search")
      Tr["EXT-YouTube_Display"] = that.translate("VAL_EXT-YouTube_Display")
      Tr["EXT-YouTube_Header"] = that.translate("VAL_EXT-YouTube_Header")
      Tr["EXT-YouTube_Username"] = that.translate("VAL_EXT-YouTube_Username")
      Tr["EXT-YouTube_Token"] = that.translate("VAL_EXT-YouTube_Token")
      Tr["EXT-YouTubeCast_Name"] = that.translate("VAL_EXT-YouTubeCast_Name")
      Tr["EXT-YouTubeCast_Port"] = that.translate("VAL_EXT-YouTubeCast_Port")
      resolve(Tr)
    })
  }
}

