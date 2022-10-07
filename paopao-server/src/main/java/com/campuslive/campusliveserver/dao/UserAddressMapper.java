package com.campuslive.campusliveserver.dao;

import com.campuslive.campusliveserver.entity.UserAddress;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@Mapper
public interface UserAddressMapper {
    //获取用户地址列表
    @Select("select * from userAddress where userID=#{userID}")
    List<UserAddress> getAddress(int userID);

    //增加用户地址
    @Insert("insert into userAddress (userID,address) values (#{userID},#{address})")
    void addUserAddress(int userID, String address);
}
